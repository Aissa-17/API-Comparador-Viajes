import {Router} from 'express';
import {obtenerTrips, crearTrip} from '../controllers/trip.controller';

export const tripRoute = Router();

tripRoute.post("/", obtenerTrips);
tripRoute.post("/", crearTrip);