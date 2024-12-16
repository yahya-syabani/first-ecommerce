import React from "react";

const ChangeAddress = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="mb-4 w-full border p-2"
      />
      <div className="flex justify-end">
        <button className="mr-2 rounded bg-gray-500 px-4 py-2 text-white">
          Cancel
        </button>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
