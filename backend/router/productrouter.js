import express from "express";
import {
  createproducts,
  deleteproduct,
  getproducts,
  updateproduct,
} from "../controller/productcontroller.js";

const router = express.Router();

router.get("/products", getproducts);

router.post("/products", createproducts);

router.delete("/products/:id", deleteproduct);

router.put("/products/:id", updateproduct);

export default router;
