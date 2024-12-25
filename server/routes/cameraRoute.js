import express from 'express';
import db from '../db/mongodb.js';
import Camera from './schemas/cameraSchema.js';

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

const router = express.Router();

router.get('/', async (req, res) => {
  const results = await db.collection('cameras').find().toArray();
  res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
    const collection = db.collection('cameras');
    const query = { cameraId: req.params.id };
    const result = await collection.findOne(query);

    if (!result) {
        res.sendStatus(404);
    } else{
        res.send(result).status(200);
    }
});

router.post('/', async (req, res) => {
    try {
        const collection = db.collection('cameras');
        const result = await collection.insertMany(camera);
        res.send(result).status(204);
    } catch (e) {
        console.error(e);
        res.sendStatus(500).send("Error adding record");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const query = { cameraId: req.params.id };
        const collection = db.collection('cameras');
        const result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (e) {
        console.error(e);
        res.sendStatus(500).send("Error deleting record");
    }
});

export default router;