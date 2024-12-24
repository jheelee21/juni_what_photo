import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import camera from './models/camera.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongodb_client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function updateDatabase(data) {
  data.save().then(result => {
    console.log("data saved")
  })
}

async function mongodb_run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongodb_client.connect();
    // Send a ping to confirm a successful connection
    await mongodb_client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    await updateDatabase(camera);

  } finally {
    // Ensures that the client will close when you finish/error
    await mongodb_client.close();
  }
}

mongodb_run().catch(console.dir);