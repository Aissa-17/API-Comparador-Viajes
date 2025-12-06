import {Request, Response} from 'express';
import {trips} from '../data/trip.data';
import {Trip} from '../models/trip.model'
import {randomUUID} from 'crypto';

export const obtenerTrips = (req: Request, res: Response) => {
    res.json(trips);
};

export const crearTrip = (req: Request, res: Response) => {
    const { creatorID, title, country, cities, duration, adventureLevel, price, notes } = req.body;

    const nuevoTrip: Trip = {
        id: randomUUID(),
        creatorID,
        title,
        country,
        cities,
        duration,
        adventureLevel,
        price,
        notes
    };

    trips.push(nuevoTrip);
    res.status(201).json(nuevoTrip);
};
