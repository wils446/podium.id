import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
    if (!err) {
        err = new Error("NotFoundError");
        err.name = "NotFoundError";
    }

    switch (err.name) {
        case "BadRequest":
            return res.status(400).send();
        case "PermissionError":
            return res.status(403).send();
        case "ValidationError":
            return res.status(422).json({ errors: err.error });
        case "NotFoundError":
            return res.status(403).send();
        case "UnauthorizedError":
            return res.status(401).send();
        case "ConflictError":
            return res.status(409).send();
        default:
            return res.status(500).send();
    }
};
