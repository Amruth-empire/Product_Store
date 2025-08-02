import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productmodel from "./models/productmodel.js";

dotenv.config();

const app = express();
app.use(express.json());



app.get("/products", async (req, res) => {
  const products = await productmodel.find({});
  try {
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});



app.post("/products", async (req, res) => {
  const product = req.body; // user will send this data
  if (!product.name || !product.price || !product.image) {
    
    return res
    .status(400)
    .json({ success: false, message: "Please provide all fields" });
  }
  
  const newProduct = new productmodel(product);
  
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});



app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    await productmodel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
});



app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body; 
  
  try {
    const updatedproduct=await productmodel.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({ success: true, data:updatedproduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "" });
  }
});



app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
