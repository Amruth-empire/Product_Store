"use client";

import { Pencil, Trash, Save, X } from "lucide-react";
import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import axiosInstance from "@/lib/axiosInstance";
import { toast, Bounce } from "react-toastify";

const ProductCard = ({ _id, name, price, image }) => {
  const { deleteProduct, editProduct } = useProductContext();
  const [isEditing, setIsEditing] = useState(false);

  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedImage, setEditedImage] = useState(image);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    const updated = {
      name: editedName,
      price: parseFloat(editedPrice),
      image: editedImage,
    };

    try {
      setLoading(true);
      const response = await axiosInstance.put(`/api/products/${_id}`, updated);

      toast.success("✅ Product updated successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });

      editProduct(response.data.data); // Update frontend state
      setIsEditing(false);
    } catch (error) {
      console.error("❌ Error updating product:", error);
      toast.error("Failed to update product", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const currentImage = isEditing ? editedImage : image;

  return (
    <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-md overflow-hidden">
      {currentImage ? (
        <img
          src={currentImage}
          alt={editedName || name || "Product Image"}
          className="w-full h-48 object-cover border border-gray-200 dark:border-gray-700"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 text-sm border border-dashed border-gray-300">
          No Image
        </div>
      )}

      <div className="p-4 space-y-3">
        {isEditing ? (
          <>
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="w-full p-2 rounded-md text-black"
              placeholder="Product Name"
            />
            <input
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
              type="number"
              className="w-full p-2 rounded-md text-black"
              placeholder="Price"
            />
            <input
              value={editedImage}
              onChange={(e) => setEditedImage(e.target.value)}
              className="w-full p-2 rounded-md text-black"
              placeholder="Image URL"
            />
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">${price}</p>
          </>
        )}

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
              >
                <Save size={16} />
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => deleteProduct(_id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
              >
                <Trash size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
