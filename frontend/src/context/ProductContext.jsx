"use client";

import { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/products");
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (_id) => {
    setProducts((prev) => prev.filter((product) => product._id !== _id));
  };

  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        editProduct,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
