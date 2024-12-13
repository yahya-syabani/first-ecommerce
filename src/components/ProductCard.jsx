import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="relative transform rounded border bg-white p-4 shadow transition-transform duration-300 hover:scale-105">
      <img
        className="mb-4 h-48 w-full object-contain"
        src={product.image}
        alt=""
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="mt-2 flex items-center">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>
      <div className="group absolute bottom-4 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm text-white transition-all hover:w-32 hover:bg-red-700">
        <span className="hidden group-hover:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
