import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cameraRoutes from './routes/cameraRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/cameras', cameras);

// Create a MongoClient with a MongoClientOptions object
const mongodb_client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB and insert cameras
async function createCameras() {
  try {
    await mongodb_client.connect();
    console.log("Connected to MongoDB");
    
    const db = mongodb_client.db(process.env.MONGODB_NAME);
    const collection = db.collection("cameras");
    
    // Insert the camera data
    const result = await collection.insertMany(camera);
    console.log(`${result.insertedCount} cameras were inserted`);
    
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await mongodb_client.close();
  }
}

// Start server and create cameras
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  createCameras().catch(console.error);
});

export default app;