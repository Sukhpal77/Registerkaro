"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [statistics, setStatistics] = useState({
    customer_rating: 0,
    clients: 0,
    financial_stability: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/api/statistics");
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-yellow-50 via-white to-yellow-100 px-6 md:px-10 py-16 relative min-h-[600px]"
        style={{
          backgroundImage: "url('/img/hero-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10 h-full">
          <div>
            {/* Google Rating */}
            <div className="flex items-center mb-4">
              <img
                src="/icons/single-star.png"
                alt="Google Rating"
                className="h-5 mr-2"
              />
              <p className="text-sm text-gray-700 font-semibold flex items-center">
                Google Rating
                <img
                  src="/icons/rating-star.png"
                  alt="Google Rating"
                  className="h-4 ml-2"
                />
              </p>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Your trusted partner for compliance business needs
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various registrations, tax filings,
              and other legal matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
              <div className="flex items-center">
                <img src="/icons/Squares.png" alt="Award" className="h-10 mr-4" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
                  {statistics.customer_rating}+
                  </h3>
                  <p className="text-gray-600">Customer Rating</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/img/client.png" alt="Client" className="h-10 mr-4" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
                  {statistics.clients.toLocaleString()}+
                  </h3>
                  <p className="text-gray-600">Clients</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/img/stability.png"
                  alt="Stability"
                  className="h-10 mr-4"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
                  {statistics.financial_stability}%
                  </h3>
                  <p className="text-gray-600">Financial Stability</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded shadow-lg font-semibold">
                Talk An Expert
              </button>
              <button className="text-gray-700 px-6 py-3 flex items-center font-semibold gap-3">
                <span className="h-7 w-7 flex items-center justify-center rounded-full bg-red-500 text-white">
                  <img src="/icons/play.png" alt="Play" className="h-8" />
                </span>
                See how it works
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-yellow-100 opacity-20"></div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">
            Trusted By Over 100+ Startups and Freelance Businesses
          </h2>
          <div className="flex flex-wrap justify-center gap-10 ">
            <img src="/img/oracle.png" alt="Oracle" className="h-6" />
            <img src="/img/samsung.png" alt="Samsung" className="h-6" />
            <img src="/img/morpheus.png" alt="Morpheus" className="h-6" />
            <img src="/img/monday.png" alt="Monday" className="h-6" />
            <img src="/img/segment.png" alt="Segment" className="h-6" />
          </div>
        </div>
      </section>
    </div>
  );
}
