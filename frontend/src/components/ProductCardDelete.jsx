"use client";

import { Pencil, Trash } from "lucide-react";

const ProductCardDelete = ({ name, price, image, onEdit, onDelete }) => {
  return (
    <div className="p-4 space-y-3">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">${price}</p>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardDelete;
