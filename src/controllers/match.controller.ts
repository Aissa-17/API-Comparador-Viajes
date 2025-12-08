import {Request, Response} from 'express';
import {TripModel} from '../models/trip.model';
import {UserModel} from '../models/user.model';
import {calculatorMatch} from '../utils/match';

export const matchUserTrip = async (req: Request, res: Response) => {
    const {userId, tripId} = req.body;

    const user = await UserModel.findById(userId);
    const trip = await TripModel.findById(tripId);

    if(!user || !trip){
        return res.status(404).json({message: "Usuario o viaje no encontrado"});
    }

    const result = calculatorMatch(user, trip);

    return res.json(result);

};