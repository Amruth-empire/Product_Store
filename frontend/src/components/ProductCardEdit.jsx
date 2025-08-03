"use client";

import { Save, X } from "lucide-react";

const ProductCardEdit = ({
  editedName,
  editedPrice,
  editedImage,
  onChangeName,
  onChangePrice,
  onChangeImage,
  onSave,
  onCancel,
  loading,
}) => {
  return (
    <div className="p-4 space-y-3">
      <input
        value={editedName}
        onChange={onChangeName}
        className="w-full p-2 rounded-md text-black"
        placeholder="Product Name"
      />
      <input
        value={editedPrice}
        onChange={onChangePrice}
        type="number"
        className="w-full p-2 rounded-md text-black"
        placeholder="Price"
      />
      <input
        value={editedImage}
        onChange={onChangeImage}
        className="w-full p-2 rounded-md text-black"
        placeholder="Image URL"
      />

      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
        >
          <Save size={16} />
        </button>
        <button
          onClick={onCancel}
          className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardEdit;
