
import mongoose  from "mongoose";
import productmodel from "../models/productmodel.js";

export const getproducts = async (req, res) => {
  const products = await productmodel.find({});
  try {
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const createproducts=async (req, res) => {
  const product = req.body; // user will send this data
  if (!product.name || !product.price || !product.image) {
    
    return res
    .status(400)
    .json({ success: false, message: "Please provide all fields" });
  }
  
  const newProduct = new productmodel(product);
  
  try {
    await newProduct.save();
    res.status(201).json({ success: true, message: "Product created successfully", data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export const deleteproduct= async (req, res) => {
  const { id } = req.params;
  
  try {
    await productmodel.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


export const updateproduct= async (req, res) => {
  const { id } = req.params;
  const product = req.body; 

  if(!mongoose.Types.ObjectId.isValid(id))
  {
    return res.status(404).json({success:false,message:"Invalid Product Id"});
  }
  
  try {
    const updatedproduct=await productmodel.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({ success: true, data:updatedproduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "" });
  }
}