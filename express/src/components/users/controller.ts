import { UnauthorizedError } from "@src/common/errors";
import { RequestHandler } from "express";
import UserService from "./service";

export const getCurrentUser: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) next(new UnauthorizedError());

    try {
        const userService = new UserService();
        const user = await userService.getCurrentUser(req.user!.id);
        return res.status(200).json({ user });
    } catch (err) {
        throw err;
    }
};

export default {
    getCurrentUser,
};
