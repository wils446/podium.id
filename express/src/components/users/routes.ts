import passport from "@src/config/passport";
import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get("/me", passport.authenticate("jwt", { session: false }), controller.getCurrentUser);
