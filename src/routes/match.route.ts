import {Router} from 'express';
import {matchUserTrip} from '../controllers/match.controller';
import {matchSchema} from '../schema/match.schema';
import {matchMiddleware} from '../middlewares/match.middleware';

export const matchRoute = Router();

matchRoute.post("/", matchMiddleware(matchSchema), matchUserTrip);