import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cameraRoutes from './routes/cameraRoute.js';
import { connectDB } from './db/mongodb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Mount camera routes at /api/cameras
app.use('/api/cameras', cameraRoutes);

// Start server and initialize database connection
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});

export default app;