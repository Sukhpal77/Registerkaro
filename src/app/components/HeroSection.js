"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-blue-900 text-white py-16 h-96 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row  justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Manage Your Services by Your Mobile Phone
          </h1>
          <p className="mb-6">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress. 
          </p>
          <h4 className="text-2xl font-bold mb-4 pt-10">Get the App</h4>
          <div className="flex gap-4 justify-center md:justify-start ">
            <button className="bg-white text-blue-900 py-2 px-4 rounded shadow flex items-center gap-2">
              <img src="/icons/apple-store.png" alt="App Store" className="w-6 h-6" />
              Get on App Store
            </button>
            <button className="bg-white text-blue-900 py-2 px-4 rounded shadow flex items-center gap-2">
              <img src="/icons/play-store.png" alt="Google Play" className="w-6 h-6" />
              Get on Google Play
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img src="/img/mobile-app.png" alt="Mobile App" className="w-full" />
        </div>
      </div>
    </section>
  );
}
