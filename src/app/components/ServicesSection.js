"use client";
export default function ServicesSection() {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-gray-600 uppercase">
              Welcome to RegisterKaro.in
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Services
            </h3>
          </div>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/company-formation.png"
                alt="Company Formation"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Company Formation
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Build web-based solutions that enhance customer experience.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
  
            {/* Service Card */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/secretarial-services.png"
                alt="Company Secretarial Services"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Company Secretarial Services
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Make data-driven decisions and utilize technology to reach
                business goals.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
  
            {/* Add more cards below */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/virtual-office.png"
                alt="Virtual Office Address"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Virtual Office Address
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Foster customer relationships by effectively serving your market.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
  
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/compliance.png"
                alt="Annual Compliance Services"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Annual Compliance Services
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Turn your ideas into modern products with our design experts.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
  
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/payroll.png"
                alt="Payroll Services"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Payroll Services
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Expand your business across the globe with minimal effort.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
  
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-16 h-16 mb-4"
                src="/icons/bookkeeping.png"
                alt="Bookkeeping Services"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Bookkeeping Services
              </h4>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Steering user behaviors with creative design, data insights &
                technology.
              </p>
              <a
                href="#"
                className="mt-4 text-blue-500 text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>
  
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
            >
              See All Services
            </a>
          </div>
        </div>
      </section>
    );
  }
  