export default function AboutSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Text Content */}
                    <div>
                        <h3 className="text-sm font-semibold text-orange-500 uppercase">
                            Welcome to RegisterKaro.in
                        </h3>
                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            About Register Karo
                        </h2>
                        <p className="mt-4 text-gray-600">
                            We have been using Intelegencia as our DevOps vendor for our field
                            service applications over the last couple of years and I’m
                            extremely pleased with their performance, ability to execute, and
                            willingness to adapt in our ever-changing environment. Perry is
                            an outstanding leader who is fanatical about customer
                            satisfaction. He has built a solid team which has consistently
                            delivered on projects thereby exceeding everyone’s expectations.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I would strongly recommend their services to any organization
                            that is looking for solid, reliable, and predictable outcomes.
                        </p>
                        <a
                            href="#"
                            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                        >
                            Learn More &rarr;
                        </a>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/img/about-team.png"
                            alt="Team at Register Karo"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-16 px-6 md:px-10">
                    <h3 className="text-sm font-semibold text-orange-500 uppercase">
                        Why RegisterKaro.in
                    </h3>
                    <div className="flex flex-col md:flex-row items-center  md:space-y-0 space-y-8">
                        <div className="md:pr-10">
                        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Why Choose Register Karo
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl">
                            It is with consistent services and results that build trust with
                            the people and that in turn help us to serve the business better.
                        </p>
                        </div>
                        {/* Features Section */}
                            {/* First Row with Two Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <div className="flex flex-col items-center bg-red-50 p-6 rounded-lg shadow-md">
                                    <img
                                        className="w-12 h-12 mb-4"
                                        src="/icons/confidential-safe-icon.png"
                                        alt="Confidential & Safe"
                                    />
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        Confidential & Safe
                                    </h4>
                                    <p className="mt-2 text-sm text-center text-gray-600">
                                        All your private information is safe with us.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-md">
                                    <img
                                        className="w-12 h-12 mb-4"
                                        src="/icons/no-hidden-fee-icon.png"
                                        alt="No Hidden Fee"
                                    />
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        No Hidden Fee
                                    </h4>
                                    <p className="mt-2 text-sm text-center text-gray-600">
                                        Everything is put before you with no hidden charges or conditions.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        {/* Second Row with Three Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 3 */}
                            <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md">
                                <img
                                    className="w-12 h-12 mb-4"
                                    src="/icons/satisfaction-guaranteed-icon.png"
                                    alt="Guaranteed Satisfaction"
                                />
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Guaranteed Satisfaction
                                </h4>
                                <p className="mt-2 text-sm text-center text-gray-600">
                                    We ensure that you stay 100% satisfied with our offered services.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="flex flex-col items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                <img
                                    className="w-12 h-12 mb-4"
                                    src="/icons/expert-assistance-icon.png"
                                    alt="Expert CA/CS Assistance"
                                />
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Expert CA/CS 
                                </h4>
                                <p className="mt-2 text-sm text-center text-gray-600">
                                    Prompt support from our in-house expert professionals.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="flex flex-col items-center bg-pink-50 p-6 rounded-lg shadow-md">
                                <img
                                    className="w-12 h-12 mb-4"
                                    src="/icons/confidential-safe-icon.png"
                                    alt="Confidential & Safe"
                                />
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Confidential & Safe
                                </h4>
                                <p className="mt-2 text-sm text-center text-gray-600">
                                   All your private information is safe with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
