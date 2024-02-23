import mongoose from "mongoose";

const URI = process.env.MONGODB_URI as string;

if (!URI) {
  throw new Error("No URI provided");
}

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);

    mongoose.connection.on("error", (error) => {
      console.error(`Error connecting to database: ${error}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.error("Disconnected from MongoDB");
    });
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
  }
};

export default connectDB;
