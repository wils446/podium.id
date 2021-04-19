"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.UnauthorizedError = exports.PermissionError = exports.NotFoundError = exports.ConflictError = exports.BadRequest = void 0;
var BadRequest_1 = __importDefault(require("./BadRequest"));
exports.BadRequest = BadRequest_1.default;
var ConflictError_1 = __importDefault(require("./ConflictError"));
exports.ConflictError = ConflictError_1.default;
var NotFoundError_1 = __importDefault(require("./NotFoundError"));
exports.NotFoundError = NotFoundError_1.default;
var PermissionError_1 = __importDefault(require("./PermissionError"));
exports.PermissionError = PermissionError_1.default;
var UnauthorizedError_1 = __importDefault(require("./UnauthorizedError"));
exports.UnauthorizedError = UnauthorizedError_1.default;
var ValidationError_1 = __importDefault(require("./ValidationError"));
exports.ValidationError = ValidationError_1.default;
