import mongoose from "mongoose";

// connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`DB connection successful! at ${new Date().toLocaleString()}`);
  } catch (err) {
    console.log("Failed to connect with database,some things went wrong!");
    console.log(err);
  }
};

export default connectDB;
