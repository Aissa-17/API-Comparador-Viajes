// src/routes/user.route.ts
import { Router } from "express";
import { obtenerUsuarios, crearUsuario } from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleares";
import { userSchema } from "../schema/user.schema";

export const userRoute = Router();

userRoute.get("/", obtenerUsuarios);
userRoute.post("/", userMiddleware(userSchema), crearUsuario);
