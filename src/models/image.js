import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imageId: Number,
    tripId: Number,
    cameraId: Number,
    isCover: Boolean,
    hasTitle: Boolean,
    s3Url: String,
    uploadDate: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);
