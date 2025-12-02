import {Request, Response} from 'express';
import {users} from '../data/user.data';
import {trips} from '../data/trip.data';
import {calculatorMatch } from '../utils/match';

export const matchUserTrip = (req: Request, res: Response) => {
    const {userId, tripId} = req.body;

    const user = users.find(u=>u.id === userId);
    const trip = trips.find(f=>f.id === tripId);

    if(!user || !trip){
        return res.status(404).json({message: "Usuario o viaje no encontrado"});
    }

    const result = calculatorMatch(user, trip);

    return res.json(result);

};