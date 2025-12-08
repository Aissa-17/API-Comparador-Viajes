import mongonoose from 'mongoose';

export async function connectDB() {
    try {
        await mongonoose.connect('mongodb://localhost:27017/matchUsersTrips');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}