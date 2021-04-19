import { ICreateUserInputDTO, ILoginUserInputDTO } from "./interface";
import argon2 from "argon2";
import sequelize from "../../config/sequelize";
import { User } from "../users/model";
import { ConflictError, UnauthorizedError } from "@src/common/errors";
import jwt from "jsonwebtoken";

export default class AuthService {
    async createAccount(UserData: ICreateUserInputDTO) {
        const t = await sequelize.transaction();
        UserData.password = await argon2.hash(UserData.password);

        const user = await User.findOne({ where: { email: UserData.email } });

        if (user) throw new ConflictError("Email already registered");

        try {
            const newAccount = await User.create({ UserData });
            await t.commit();

            return newAccount.id;
        } catch (err) {
            await t.rollback();
            throw err;
        }
    }

    async loginAccount(userData: ILoginUserInputDTO) {
        const user = await User.findOne({ where: { email: userData.email } });

        if (!user) throw new UnauthorizedError("Email has not registered");

        try {
            if (await argon2.verify(user.password, userData.password)) {
                const jwtToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1y" });
                return jwtToken;
            } else {
                throw new UnauthorizedError("Invalid Password");
            }
        } catch (err) {
            throw err;
        }
    }
}
