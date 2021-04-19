import { Router } from "express";
import { body } from "express-validator";
import controller from "./controller";

const router = Router();

router.post(
    "/signup",
    body("name").notEmpty(),
    body("password")
        .isLength({ min: 5 })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
    body("email").isEmail(),
    body("gender").notEmpty(),
    controller.createNewAccount
);

router.post(
    "/signin",
    body("email").isEmail(),
    body("password")
        .isLength({ min: 5 })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
    controller.loginAccount
);

export default router;
