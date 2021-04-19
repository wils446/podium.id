import { Result, ValidationError as ValidatorError } from "express-validator";

export default class ValidationError extends Error {
    constructor(errors: Result<ValidatorError>) {
        super();
        this.name = "Validation Error";
        const error = errors;
    }
}
