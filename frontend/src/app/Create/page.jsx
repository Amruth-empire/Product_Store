"use client";
import { useState } from "react";

export default function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual backend logic
    console.log({ productName, price, imageUrl });
    alert("Product added!");
    setProductName("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Create New Product</h1>

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
          Add Product
        </button>
      </form>
    </div>
  );
}
