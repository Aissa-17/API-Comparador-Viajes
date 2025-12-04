import {Router} from 'express';
import {matchUserTrip} from '../controllers/match.controller'

export const matchRoute = Router();

matchRoute.post("/", matchUserTrip);