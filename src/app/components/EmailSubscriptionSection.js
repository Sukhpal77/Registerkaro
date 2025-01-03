"use client";

import React from "react";

export default function EmailSubscriptionSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-yellow-200 uppercase text-sm mb-2">
          1% of the Industry
        </p>
        <h3 className="text-2xl font-bold mb-4">
          Welcome to Your New Digital Reality. Now.
        </h3>
        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="py-2 px-4 rounded-l-lg w-64 text-gray-800"
          />
          <button className="bg-yellow-500 py-2 px-6 rounded-r-lg text-blue-900">
            Submit
          </button>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <span>✅ Instant Results</span>
          <span>✅ User-Friendly Interface</span>
          <span>✅ Personalized Customization</span>
        </div>
      </div>
    </section>
  );
}
