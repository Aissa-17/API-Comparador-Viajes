import {Router} from 'express';
import {obtenerUsuarios, crearUsuario} from '../controllers/user.controller';

export const userRoute = Router();

userRoute.post("/", obtenerUsuarios);
userRoute.post("/", crearUsuario);