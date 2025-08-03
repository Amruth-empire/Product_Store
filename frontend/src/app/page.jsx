"use client";

import React from "react";
import { useProductContext } from "@/context/ProductContext";
import ProductCard from "@/components/Productscard";
import Link from "next/link";

const Allproducts = () => {
  const { products } = useProductContext();

  const hasNoProducts = products.length === 0;

  return (
    <div className={`min-h-screen bg-white dark:bg-black transition-colors px-6 py-10 ${hasNoProducts ? "flex items-center justify-center" : ""}`}>
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6 flex justify-center items-center gap-2">
          Current Products <span>🚀</span>
        </h1>

        {hasNoProducts ? (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <p className="text-lg text-black dark:text-white">
              No products found <span>🥺</span>
            </p>
            <Link
              href="/Create"
              className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-500"
            >
              Create a product
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
            {products.map((product, index) => (
              <ProductCard key={index} index={index} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allproducts;
