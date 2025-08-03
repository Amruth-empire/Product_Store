"use client";

import { useState } from "react";
import axiosInstance from "@/lib/axiosInstance.js";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductContext } from "@/context/ProductContext";

export default function CreateProductPage() {

const { addProduct } = useProductContext();


  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newproduct = {
      name: productName,
      price: parseFloat(price),
      image: imageUrl,
    };

    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/products", newproduct);
      console.log("✅ Product created:", response.data);
      toast.success("✅ Product added successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      addProduct(response.data.data);
      setProductName("");
      setPrice("");
      setImageUrl("");
    } catch (error) {
      console.log(
        "❌ Error adding product:",
        error.response?.data || error.message
      );
      toast.error("Failed to add product", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Create New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full px-4 py-2 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-400 dark:bg-blue-600 text-black dark:text-white font-semibold rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
