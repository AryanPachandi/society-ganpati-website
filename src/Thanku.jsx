// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Thank You!
      </h1>
      <p className="text-gray-700 mb-6">
        Your submission has been received successfully.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;
