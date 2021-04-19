"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var passport_jwt_1 = require("passport-jwt");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../../.env" });
var options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "vincentisgay",
};
passport_1.default.use(new passport_jwt_1.Strategy(options, function (jwtPayload, done) {
    done(null, jwtPayload);
}));
exports.default = passport_1.default;
