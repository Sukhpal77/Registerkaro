import React, { useState, useEffect } from 'react';

export default function ClientsSection() {
  const [clients, setClients] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients");
        const data = await response.json();
        setClients(data);
        
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const handleLogoClick = (company) => {
    setSelectedCompany(company);
  };

  const closeModal = () => {
    setSelectedCompany(null);
  };

  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
            Our Happy Clients
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            Professionally cultivate one-to-one customer service with robust ideas.
            Dynamically innovate resource-leveling customer service for state-of-the-art service.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center cursor-pointer hover:scale-105 transform transition-all duration-300"
                onClick={() => handleLogoClick(client)}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-14 w-14 rounded-full shadow-md"
                />
                <p className="mt-2 text-lg font-semibold text-gray-800 text-center">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
            >
              Show more &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCompany && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-lg w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-semibold text-gray-800">{selectedCompany.name}</h3>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                <strong className="font-medium">Director:</strong> {selectedCompany.director}
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">Description:</strong> {selectedCompany.description}
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">Website:</strong>
                <a href={selectedCompany.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {selectedCompany.website}
                </a>
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">Email:</strong>
                <a href={`mailto:${selectedCompany.email}`} className="text-blue-500 hover:underline">
                  {selectedCompany.email}
                </a>
              </p>
              <p className="text-gray-700">
                <strong className="font-medium">Phone:</strong> {selectedCompany.phone}
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// Steps Section
export function StepsSection() {
  return (
    <section className="bg-[#FFA229] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center">
            <div className="text-white text-lg font-semibold flex items-center">
              <span className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-orange-500 mr-4">
                <img src="/icons/paper.png" alt="Paper" className="h-5" />
              </span>
              Fill up Application Form
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white text-lg font-semibold flex items-center">
              <span className="h-10 w-10 flex items-center justify-center rounded-full bg-green-500 text-green-500 mr-4">
                <img src="/icons/online-payment.png" alt="Online Payment" className="h-5" />
              </span>
              Make Online Payment
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white text-lg font-semibold flex items-center">
              <span className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-500 text-yellow-500 mr-4">
                <img src="/icons/processing.png" alt="Processing" className="h-5" />
              </span>
              Executive will Process Application
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-white text-lg font-semibold flex items-center">
              <span className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-500 text-gray-800 mr-4">
                <img src="/icons/confirm-mail.png" alt="Confirm Mail" className="h-5" />
              </span>
              Get Confirm Mail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
