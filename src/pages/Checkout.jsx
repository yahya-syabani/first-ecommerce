import React from "react";

const Checkout = () => {
  return (
    <div className="container mx-auto min-h-96 px-4 py-8 md:px-16 lg:px-24">
      <h3 className="mb-4 text-2xl font-semibold">Order Summary</h3>
      <div className="mt-8 flex flex-col justify-between space-x-10 md:flex-row">
        <div className="md:w-2/3">
          <div>
            <div>
              <h3>Billing Information</h3>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-md md:w-1/3"></div>
      </div>
    </div>
  );
};

export default Checkout;
