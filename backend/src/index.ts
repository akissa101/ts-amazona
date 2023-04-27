import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectdb from "../config/dbCon";
import { productRouter } from "./routers/productRouter";
import { seedRouter } from "./routers/seedRouter";

dotenv.config();

connectdb();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

const PORT = process.env.PORT || 4000;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
