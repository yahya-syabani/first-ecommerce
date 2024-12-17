import React from "react";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={() => setIsModelOpen(false)}
          className="text-3x absolute right-4 top-4 text-gray-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
