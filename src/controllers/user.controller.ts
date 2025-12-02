import {Request, Response} from 'express';
import {users} from '../data/user.data';
import { User } from '../models/user.model';
import { randomUUID } from 'crypto';

export const obtenerUsuarios = (req: Request, res: Response) => {
    res.json(users);
};

export const crearUsuario = (req: Request, res: Response) => {
    const {name, email} = req.body;

    const nuevoUsuario: User = { id: randomUUID(), name, email };
    users.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
};