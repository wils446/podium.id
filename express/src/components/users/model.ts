import { Sequelize, Model, DataTypes } from "sequelize";
import { SequelizeModelDefine } from "../../common/interfaces/SequelizeModelDefine";
import { UserModelInterface } from "./interface";

export class User extends Model implements UserModelInterface {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public gender!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

export const define = async (sequelize: Sequelize) => {
    const modelDefiner: SequelizeModelDefine = {
        attributes: {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            gender: {
                type: DataTypes.STRING,
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        options: {
            sequelize,
            timestamps: true,
            tableName: "users",
            modelName: "User",
        },
    };
    User.init(modelDefiner.attributes, modelDefiner.options);
};
