import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    tripId: Number,
    location: String,
    date: Date
});

const Trip = mongoose.model('Trip', tripSchema);