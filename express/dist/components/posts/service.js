"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
var sequelize_1 = __importDefault(require("../../config/sequelize"));
var model_1 = require("./model");
var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.createPost = function (postInputDTO, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var t, createdPost, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sequelize_1.default.transaction()];
                    case 1:
                        t = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, model_1.Post.create(__assign({ userId: userId }, postInputDTO), { transaction: t })];
                    case 3:
                        createdPost = _a.sent();
                        return [4 /*yield*/, t.commit()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, createdPost.id];
                    case 5:
                        err_1 = _a.sent();
                        return [4 /*yield*/, t.rollback()];
                    case 6:
                        _a.sent();
                        throw err_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.deletePost = function (userId, postId) {
        return __awaiter(this, void 0, void 0, function () {
            var t, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sequelize_1.default.transaction()];
                    case 1:
                        t = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, model_1.Post.destroy({ where: { userId: userId, id: postId }, transaction: t })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, t.commit()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        err_2 = _a.sent();
                        return [4 /*yield*/, t.rollback()];
                    case 6:
                        _a.sent();
                        throw err_2;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.updatePost = function (userId, postId, caption) {
        return __awaiter(this, void 0, void 0, function () {
            var t, post, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sequelize_1.default.transaction()];
                    case 1:
                        t = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        return [4 /*yield*/, model_1.Post.findOne({ where: { id: postId, userId: userId }, transaction: t })];
                    case 3:
                        post = _a.sent();
                        post.caption = caption;
                        return [4 /*yield*/, t.commit()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        err_3 = _a.sent();
                        return [4 /*yield*/, t.rollback()];
                    case 6:
                        _a.sent();
                        throw err_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.getRandomPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var postList, random, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.Post.findAndCountAll()];
                    case 1:
                        postList = _a.sent();
                        random = Math.floor(Math.random() * postList.count);
                        return [2 /*return*/, postList.rows[random]];
                    case 2:
                        err_4 = _a.sent();
                        throw err_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PostService;
}());
exports.PostService = PostService;
