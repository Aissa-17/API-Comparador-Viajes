import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {matchRoute} from './routes/match.route';
import {tripRoute} from './routes/trip.route';
import {userRoute} from './routes/user.route';
import {connectDB} from './database/mongo';

connectDB();
const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));
app.use("/api/matchs", matchRoute);
app.use("/api/trips", tripRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server esta corriendo en http://localhost:${PORT}`);
});