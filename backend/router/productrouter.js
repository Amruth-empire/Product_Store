import express from "express";
import {
  createproducts,
  deleteproduct,
  getproducts,
  updateproduct,
} from "../controller/productcontroller.js";

const router = express.Router();

router.get("/", getproducts);

router.post("/", createproducts);

router.delete("/:id", deleteproduct);

router.put("/:id", updateproduct);

export default router;
