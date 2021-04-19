"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = __importDefault(require("../../config/passport"));
var controller_1 = __importDefault(require("./controller"));
var express_validator_1 = require("express-validator");
var router = express_1.Router();
router.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getRandomPost);
router.post("/", passport_1.default.authenticate("jwt", { session: false }), express_validator_1.body("caption").notEmpty(), controller_1.default.createNewPost);
router.put("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.updatePost);
router.delete("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.deletePost);
exports.default = router;
