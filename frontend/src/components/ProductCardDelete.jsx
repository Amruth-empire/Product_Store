"use client";

import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import { toast, Bounce } from "react-toastify";

const ProductCardDelete = ({ _id, name, price, image, onEdit, onDeleted }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      setDeleting(true);
      const response = await axiosInstance.delete(`/api/products/${_id}`);

      toast.success("🗑️ Product deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });

      // Trigger update in parent state
      onDeleted?.(_id);
    } catch (error) {
      console.error("❌ Error deleting product:", {
        message: error.message,
        status: error?.response?.status,
        data: error?.response?.data,
      });

      toast.error("Failed to delete product", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-4 space-y-3">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300">${price}</p>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardDelete;
