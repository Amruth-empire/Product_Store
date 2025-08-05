import express from "express";
import next from "next";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./backend/config/db.js";
import productrouter from "./backend/router/productrouter.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev, dir: "./frontend" });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = process.env.PORT || 5000;

nextApp.prepare().then(() => {
  connectDB();

  app.use(cors());
  app.use(express.json());

  app.use("/api", productrouter);

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
