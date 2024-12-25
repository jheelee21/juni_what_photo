import mongoose from 'mongoose';

const cameraSchema = new mongoose.Schema({
    cameraId: Number,
    type: String,
    model: String
});

export const Camera = mongoose.model('Camera', cameraSchema);