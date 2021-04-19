"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
var express_1 = require("express");
var posts_1 = require("../components/posts");
var apiRouter = express_1.Router();
apiRouter.use("/posts", posts_1.router);
exports.apiRoutes = apiRouter;
