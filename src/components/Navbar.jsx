import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-16 lg:px-24">
        <div className="text-lg font-bold">
          <Link to="/">e-commerce</Link>
        </div>
        <div className="relative mx-4 flex-1">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border px-4 py-2"
            />
            <FaSearch className="absolute right-3 top-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute left-3 top-0 flex w-3 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/" className="hover:underline">
          Contact
        </Link>
        <Link to="/" className="hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
