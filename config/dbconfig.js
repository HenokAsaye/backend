import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to DataBase", error.message, error.stack);
    process.exit(1);
  }
};

export default connectToDb;