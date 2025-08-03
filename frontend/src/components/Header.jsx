"use client";

import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import ThemeToggleButton from "./ui/theme-toggle-button";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
      <div className="flex items-center gap-2 border border-blue-400 px-4 py-2 rounded-md text-blue-400 font-semibold text-lg">
        PRODUCT STORE
        <ShoppingCartIcon className="w-5 h-5 text-blue-400" />
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-gray-600 p-2 rounded-md hover:bg-gray-500">
          <PlusIcon className="w-5 h-5 text-white" />
        </button>

        <div className="bg-gray-600 hover:bg-gray-500 rounded-md">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
