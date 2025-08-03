"use client";

import { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Add product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // Delete product by _id
  const deleteProduct = (_id) => {
    setProducts((prev) => prev.filter((product) => product._id !== _id));
  };

  // Edit product by _id
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
