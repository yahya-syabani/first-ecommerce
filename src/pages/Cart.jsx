import React, { useState } from "react";
import { FaCartArrowDown, FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAdress] = useState("address");
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="container mx-auto min-h-96 px-4 py-8 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="mb-4 text-2xl font-semibold">Shopping Cart</h3>
          <div className="mt-8 flex flex-col justify-between space-x-10 md:flex-row">
            <div className="md: w-2/3">
              <div className="text-m mb-4 flex items-center justify-between border-b font-bold">
                <p className="pl-5">Products</p>
                <div className="flex">
                  <p className="pr-16">Price</p>
                  <p className="pr-14">Quantity</p>
                  <p className="pr-5">Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((products) => (
                  <div
                    key={products.id}
                    className="flex items-center justify-between border-b p-3"
                  >
                    <div className="items-center space-x-4 md:flex">
                      <img
                        src={products.image}
                        alt=""
                        className="h-16 w-16 rounded object-contain"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-lg font-semibold">
                          {products.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-12">
                      <p>${products.price}</p>
                      <div className="flex w-24 items-center justify-center border">
                        <button className="px-1 text-xl">-</button>
                        <p className="px-3 text-xl">{products.quantity}</p>
                        <button className="px-1 text-xl">+</button>
                      </div>
                      <p>${(products.quantity * products.price).toFixed(2)}</p>
                      <button className="pr-3 text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md: w-1/3 rounded-lg border bg-white p-6 shadow-md">
              <h3 className="mb-5 text-sm font-semibold">Cart Total</h3>
              <div className="mb-5 flex justify-between border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to: {""}</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  onClick={() => setIsModelOpen(true)}
                  className="ml-2 mt-1 text-blue-500 hover:underline"
                >
                  Change Address
                </button>
              </div>
              <div className="mb-4 flex justify-between">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 py-2 text-white hover:bg-red-800">
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
        </div>
      ) : (
        <div className="flex justify-center">
          <FaCartArrowDown className="h-96 scale-150" />
        </div>
      )}
    </div>
  );
};

export default Cart;
