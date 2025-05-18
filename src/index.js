import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "./blogRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});