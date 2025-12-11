// src/middlewares/trip.middleware.ts
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const tripMiddleware = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      console.error("Validation error (trip):", error);
      return res.status(400).json({
        message: "Validation error in trip",
        errors: error.errors ?? error.message,
        body: req.body,
      });
    }
  };
};
