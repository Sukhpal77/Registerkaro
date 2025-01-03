export default function VideoSection() {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Text and Video Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Video Introductions
            </h2>
            <p className="mt-4 text-gray-300">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
              vulputate pellentesque a diam tincidunt.
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/ligth-bulb.png"
                    alt="Light Bulb"
                    className="h-10 w-10"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">
                    Explore ideas together
                  </h4>
                  <p className="mt-1 text-gray-300">
                    Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    src="/icons/tv.png"
                    alt="TV"
                    className="h-10 w-10"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">
                    Bring those ideas to life
                  </h4>
                  <p className="mt-1 text-gray-300">
                    Engage audience segments and finally create actionable insights.
                    Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Image Section */}
          <div className="relative">
            <img
              src="/img/video-thumbnail.png"
              alt="Video Introduction"
              className="rounded-lg shadow-lg h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <button className="text-white p-4">
                <img
                  src="/img/youtube-logo.png"
                  alt="Play Button"
                  className="h-20 w-26"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
