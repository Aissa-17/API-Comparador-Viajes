import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export const obtenerUsuarios = async (req: Request, res: Response) => {
  const usuarios = await UserModel.find();
  res.json(usuarios);
};

export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const nuevoUsuario = new UserModel(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  }catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};
