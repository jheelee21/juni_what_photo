require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

// CORS middleware
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongodb_client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const imageSchema = new mongoose.Schema({
    imageId: Number,
    tripId: Number,
    cameraId: Number,
    isCover: Boolean,
    hasTitle: Boolean,
    s3Url: String,
    uploadDate: { type: Date, default: Date.now }
});

const tripSchema = new mongoose.Schema({
    tripId: Number,
    location: String,
    date: Date
});

const cameraSchema = new mongoose.Schema({
    cameraId: Number,
    type: String,
    model: String
});

const Image = mongoose.model('Image', imageSchema);
const Trip = mongoose.model('Trip', tripSchema);
const Camera = mongoose.model('Camera', cameraSchema);

async function mongodb_run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongodb_client.connect();
    // Send a ping to confirm a successful connection
    await mongodb_client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongodb_client.close();
  }
}
mongodb_run().catch(console.dir);