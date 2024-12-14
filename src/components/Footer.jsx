import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-8 text-white md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold">E-Commerce</h3>
          <p className="mt-4">Your one stop commerce</p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="mt-4 flex space-x-4">
            <a href="" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
          <form className="mt-8 flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-l-lg border border-gray-600 bg-gray-800 p-2"
            />
            <button className="rounded-r-lg border border-gray-600 bg-red-600 px-4 py-2 text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <p>&copy; 2024 E-Commerce All rights reserved</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
