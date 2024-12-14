import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="mx-auto px-4 py-12 md:px-16 lg:px-24">
      <h2 className="mb-6 text-center text-2xl font-bold">Shop</h2>
      <div className="grid cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {products.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
