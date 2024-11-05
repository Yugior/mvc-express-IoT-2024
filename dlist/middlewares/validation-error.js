"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validationError = (err, req, res, next) => {
    if (err instanceof zod_1.ZodError) {
        // If the error is from Zod, format and send a validation error response
        res.status(400).json({
            status: 400,
            error: "Error de Validación",
            issues: err.errors.map((issue) => ({
                campo: issue.path.join("."),
                mensaje: issue.message,
            })),
        });
    }
    else {
        // If the error is not from Zod, pass it to the next error handler
        next(err);
    }
};
exports.default = validationError;
