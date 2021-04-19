import { RequestHandler } from "express";
import { UnauthorizedError, ValidationError } from "../../common/errors";
import { IPostInputDTO } from "./interface";
import { PostService } from "./service";
import { validationResult } from "express-validator";

const createNewPost: RequestHandler = async (req, res, next) => {
    if (!validationResult(req).isEmpty()) return next(new ValidationError(validationResult(req)));
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        const createdPostId = await postService.createPost(req.body as IPostInputDTO, req.user.id);
        return res.status(200).json({ id: createdPostId });
    } catch (err) {
        next(err);
    }
};

const deletePost: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        await postService.deletePost(req.user.id, parseInt(req.params.postId));
        return res.status(200).send();
    } catch (err) {
        next(err);
    }
};

const updatePost: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        await postService.updatePost(req.user.id, parseInt(req.params.id), req.body.caption as string);
        return res.status(200).send();
    } catch (err) {
        next(err);
    }
};

const getRandomPost: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        const { post, likeCount } = await postService.getRandomPost();
        return res.status(200).json({ post, likeCount });
    } catch (err) {
        next(err);
    }
};

const likePost: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        await postService.like(parseInt(req.params.postId), req.user.id);
        return res.status(204).send();
    } catch (err) {
        next(err);
    }
};

const unlikePost: RequestHandler = async (req, res, next) => {
    if (req.user === undefined) return next(new UnauthorizedError());

    try {
        const postService = new PostService();
        await postService.unlike(parseInt(req.params.postId), req.user.id);
        return res.status(204).send();
    } catch (err) {
        next(err);
    }
};

export default {
    createNewPost,
    updatePost,
    deletePost,
    getRandomPost,
    likePost,
    unlikePost,
};
