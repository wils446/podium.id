export default class PermissionError extends Error {
    constructor(message?: string) {
        super();
        this.name = "PermissionError";
        this.message = message || "";
    }
}
