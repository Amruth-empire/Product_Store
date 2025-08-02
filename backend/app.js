import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productrouter from "./router/productrouter.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use('/products',productrouter)

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
