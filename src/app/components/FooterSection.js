"use client";

import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">Design Outstanding Interfaces</h4>
          <p className="text-sm mb-4">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/facebook.png" alt="Facebook" className="h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/google.png" alt="Google" className="h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/apple.png" alt="Apple" className="h-5" />
            </a>
            
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Start a Business</h4>
          <ul className="text-sm space-y-2">
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Government Registration</h4>
          <ul className="text-sm space-y-2">
            <li>Partners</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Compliance & Tax</h4>
          <ul className="text-sm space-y-2">
            <li>Channels</li>
            <li>Scale</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © 2024 RegisterKaro. All Rights Reserved.
      </div>
    </footer>
  );
}
