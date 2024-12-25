import express from 'express';
import { client } from '../db/mongodb.js';

const router = express.Router();

// GET all cameras
router.get('/', async (req, res) => {
    try {
        const db = client.db(process.env.MONGODB_NAME);
        const collection = db.collection("cameras");
        
        const cameras = await collection.find({}).toArray();
        res.status(200).json({ 
            success: true, 
            data: cameras 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching cameras',
            error: error.message 
        });
    }
});

// POST new camera
router.post('/', async (req, res) => {
    try {
        const db = client.db(process.env.MONGODB_NAME);
        const collection = db.collection("cameras");
        
        const result = await collection.insertOne(req.body);
        res.status(201).json({ 
            success: true, 
            message: 'Camera added successfully',
            data: result 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error adding camera',
            error: error.message 
        });
    }
});

export default router;