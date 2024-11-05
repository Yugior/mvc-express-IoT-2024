import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const validationError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    // If the error is from Zod, format and send a validation error response
    res.status(400).json({
      status: 400,
      error: "Error de Validación",
      issues: err.errors.map((issue) => ({
        campo: issue.path.join("."),
        mensaje: issue.message,
      })),
    });
  } else {
    // If the error is not from Zod, pass it to the next error handler
    next(err);
  }
};

export default validationError;
