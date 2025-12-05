import {Router} from 'express';
import {obtenerTrips, crearTrip} from '../controllers/trip.controller';
import {tripMiddleware} from '../middlewares/trip.middleware';
import {tripSchema} from '../schema/trip.schema';

export const tripRoute = Router();

tripRoute.post("/", obtenerTrips);
tripRoute.post("/", tripMiddleware(tripSchema), crearTrip);