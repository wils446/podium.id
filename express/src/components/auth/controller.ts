import { UnauthorizedError, ValidationError } from "@src/common/errors";
import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { ICreateUserInputDTO, ILoginUserInputDTO } from "./interface";
import AuthService from "./service";

export const createNewAccount: RequestHandler = async (req, res, next) => {
    if (validationResult(req)) return next(new ValidationError(validationResult(req)));
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const authService = new AuthService();
        const userId = await authService.createAccount(req.body as ICreateUserInputDTO);
        return res.status(201).json({ userId });
    } catch (err) {
        next(err);
    }
};

export const loginAccount: RequestHandler = async (req, res, next) => {
    if (validationResult(req)) return next(new ValidationError(validationResult(req)));
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const authService = new AuthService();
        const jwtToken = await authService.loginAccount(req.body as ILoginUserInputDTO);
        return res.status(200).json({ jwtToken });
    } catch (err) {
        next(err);
    }
};

export default {
    createNewAccount,
    loginAccount,
};
