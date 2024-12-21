import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  return (
    <div className="container mx-auto min-h-96 px-4 py-8 md:px-16 lg:px-24">
      <h3 className="mb-4 text-2xl font-semibold">Order Summary</h3>
      <div className="mt-8 flex flex-col justify-between space-x-10 md:flex-row">
        <div className="md:w-2/3">
          <div className="mb-6 border p-2">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full border px-3 py-2"
                />
              </div>

              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full border px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    className="w-full border px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 border p-2">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700" htmlFor="">
                  Address
                </label>
                <input
                  type="address"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full border px-3 py-2"
                />
              </div>

              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    City
                  </label>
                  <input
                    type="city"
                    name="city"
                    placeholder="Enter City"
                    className="w-full border px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700" htmlFor="">
                    Zip Code
                  </label>
                  <input
                    type="zip"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full border px-3 py-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 border p-2">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="payemnt"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={() => setPaymentMethod("Cash on Delivery")}
                />
                <label className="ml-2 block text-gray-700">
                  Cash on Delivery
                </label>
              </div>

              <div>
                <div className="mb-2 flex items-center">
                  <input
                    type="radio"
                    name="payemnt"
                    checked={paymentMethod === "Debit Card"}
                    onChange={() => setPaymentMethod("Debit Card")}
                  />
                  <label className="ml-2 block text-gray-700">Debit Card</label>
                </div>
                {paymentMethod === "Cash on Deliver" && (
                  <div>
                    <h3>Debit Card Information</h3>
                    <div>
                      <label htmlFor="">Card Number</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label htmlFor="">Carholder Name</label>
                      <input type="text" />
                    </div>
                    <div>
                      <div>
                        <label htmlFor="">Expired Day</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-md md:w-1/3"></div>
      </div>
    </div>
  );
};

export default Checkout;
