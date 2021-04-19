"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
var routes_1 = __importDefault(require("./routes"));
exports.router = routes_1.default;
var controller_1 = __importDefault(require("./controller"));
exports.controller = controller_1.default;
