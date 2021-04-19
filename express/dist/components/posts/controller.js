"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("../../common/errors");
var service_1 = require("./service");
var express_validator_1 = require("express-validator");
var createNewPost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postService, createdPostId, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!express_validator_1.validationResult(req).isEmpty())
                    return [2 /*return*/, next(new errors_1.ValidationError(express_validator_1.validationResult(req)))];
                if (req.user === undefined)
                    return [2 /*return*/, next(new errors_1.UnauthorizedError())];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                postService = new service_1.PostService();
                return [4 /*yield*/, postService.createPost(req.body, req.user.id)];
            case 2:
                createdPostId = _a.sent();
                return [2 /*return*/, res.status(200).json({ id: createdPostId })];
            case 3:
                err_1 = _a.sent();
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deletePost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postService, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.user === undefined)
                    return [2 /*return*/, next(new errors_1.UnauthorizedError())];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                postService = new service_1.PostService();
                return [4 /*yield*/, postService.deletePost(req.user.id, parseInt(req.params.postId))];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).send()];
            case 3:
                err_2 = _a.sent();
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updatePost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postService, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.user === undefined)
                    return [2 /*return*/, next(new errors_1.UnauthorizedError())];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                postService = new service_1.PostService();
                return [4 /*yield*/, postService.updatePost(req.user.id, parseInt(req.params.id), req.body.caption)];
            case 2:
                _a.sent();
                return [2 /*return*/, res.status(200).send()];
            case 3:
                err_3 = _a.sent();
                next(err_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getRandomPost = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var postService, post, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (req.user === undefined)
                    return [2 /*return*/, next(new errors_1.UnauthorizedError())];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                postService = new service_1.PostService();
                return [4 /*yield*/, postService.getRandomPost()];
            case 2:
                post = _a.sent();
                return [2 /*return*/, res.status(200).json(post)];
            case 3:
                err_4 = _a.sent();
                next(err_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    createNewPost: createNewPost,
    updatePost: updatePost,
    deletePost: deletePost,
    getRandomPost: getRandomPost,
};
