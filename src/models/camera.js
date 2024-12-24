import mongoose from 'mongoose';

const cameraSchema = new mongoose.Schema({
    cameraId: Number,
    type: String,
    model: String
});

const Camera = mongoose.model('Camera', cameraSchema);

const camera = new Camera([
    {
        cameraId: 1,
        type: "Digital",
        model: "Nikon Coolpix S230"
    },
    {
        cameraId: 2,
        type: "DSLR",
        model: "Fujifilm FinePix AV110"
    },
    {
        cameraId: 3,
        type: "Film",
        model: "Nikon FM2"
    }
]);