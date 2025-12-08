import {Request, Response} from 'express';
import {TripModel} from '../models/trip.model';

export const obtenerTrips = async (req: Request, res: Response) => {
    const trips = await TripModel.find();
    res.json(trips);
};

export const crearTrip = async (req: Request, res: Response) => {
    try {
        const nuevoTrip = new TripModel(req.body);
        await nuevoTrip.save();
        res.status(201).json(nuevoTrip);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el trip', error });
    }
};
