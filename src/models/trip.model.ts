import mongonoose from 'mongoose';

const tripSchema = new mongonoose.Schema({
    creatorID: { type: String,  required: true },
    tittle: { type: String, required: true },
    country : { type: String, required: true },
    duration: { type: Number, required: true },
    adventureLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    price: { type: Number, required: true },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export const TripModel = mongonoose.model('Trip', tripSchema);