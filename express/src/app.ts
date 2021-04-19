import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "./config/passport";
import { errorHandler } from "./common/middlewares/errorHandler";
import "./config/sequelize";
import { apiRoutes } from "./config/routes";
dotenv.config({ path: "../.env" });

const app = express();
const port = 3000;

app.use(cors());

app.use(cookieParser());
app.use(passport.initialize());
app.use(express.json());

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
