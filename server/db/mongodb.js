import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db(process.env.MONGODB_NAME);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export { client };