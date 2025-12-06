import { Request, Response } from 'express';
import { users } from '../data/user.data';
import { User } from '../models/user.model';
import { randomUUID } from 'crypto';

export const obtenerUsuarios = (req: Request, res: Response) => {
  res.json(users);
};

export const crearUsuario = (req: Request, res: Response) => {
  const { name, email, country, interests, budget, adventureLevel } = req.body;

  const nuevoUsuario: User = {
    id: randomUUID(),
    name,
    email,
    country,
    interests,
    budget,
    adventureLevel,
  };

  users.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
};
