import { Router } from "express";
import passport from "../../config/passport";
import controller from "./controller";
import { body } from "express-validator";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), controller.getRandomPost);

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    body("caption").notEmpty(),
    controller.createNewPost
);

router.put("/", passport.authenticate("jwt", { session: false }), body("caption").notEmpty(), controller.updatePost);

router.delete("/", passport.authenticate("jwt", { session: false }), controller.deletePost);

router.post("/:id/like", passport.authenticate("jwt", { session: false }), controller.likePost);

router.delete("/:id/like", passport.authenticate("jwt", { session: false }), controller.unlikePost);

export default router;
