import { Router } from "express";
import { router as postRouter } from "../components/posts";
import { router as authRouter } from "../components/auth";

const apiRouter = Router();
apiRouter.use("/posts", postRouter);
apiRouter.use("/auth", authRouter);

export const apiRoutes = apiRouter;
