"use client";

import { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import axiosInstance from "@/lib/axiosInstance";
import { toast, Bounce } from "react-toastify";
import ProductCardEdit from "./ProductCardEdit";
import ProductCardDelete from "./ProductCardDelete";

const ProductCardList = ({ _id, name, price, image }) => {
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

      editProduct(response.data.data);
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

      {isEditing ? (
        <ProductCardEdit
          editedName={editedName}
          editedPrice={editedPrice}
          editedImage={editedImage}
          onChangeName={(e) => setEditedName(e.target.value)}
          onChangePrice={(e) => setEditedPrice(e.target.value)}
          onChangeImage={(e) => setEditedImage(e.target.value)}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
          loading={loading}
        />
      ) : (
        <ProductCardDelete
          _id={_id}
          name={name}
          price={price}
          image={image}
          onEdit={() => setIsEditing(true)}
          onDeleted={() => deleteProduct(_id)}
        />
      )}
    </div>
  );
};

export default ProductCardList;
