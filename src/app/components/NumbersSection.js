import { useEffect, useState } from "react";

export default function NumbersSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch("/api/client_statistics");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-yellow-500 text-lg uppercase mb-2">
          Why Register Karo
        </h2>
        <h3 className="text-2xl font-bold text-gray-700 mb-8">
          Some Numbers Are Important
        </h3>
        {/* Check if stats are available before rendering */}
        {stats.length === 0 ? (
          <p className="text-gray-600">Loading statistics...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
                  {stat.value}
                </h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
