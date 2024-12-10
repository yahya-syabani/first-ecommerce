import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center">
        <div>
          <Link to="/">e-commerce</Link>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Search Product" />
            <FaSearch />
          </form>
        </div>
        <div>
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <button>Login | Register</button>
          <button>
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
