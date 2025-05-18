import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "./blogRoutes.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
    try {
      await connectToDatabase();
      next();
    } catch (err) {
      res.status(500).json({ error: "Failed to connect to database" });
    }
  });

app.use("/api/blogs", blogRoutes);
app.use("/", (req, res) => {
    res.send("Server is running");
})

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((err) => {
//     console.log(err);
// })

export default app;