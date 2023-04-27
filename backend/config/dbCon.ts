import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI || "mongodb://127.0.0.1/tsamazona";
mongoose.set("strictQuery", true);

const connectdb = () => {
  mongoose.connect(MONGODB_URI);
};

export default connectdb;
