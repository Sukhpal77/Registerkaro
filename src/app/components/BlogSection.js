import { useEffect, useState } from "react";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Explore Our Blogs
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Accelerate Digital Transformation
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-600">Loading blogs...</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-lg shadow-md overflow-hidden bg-gray-100"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">
                    {blog.author} • {blog.date}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{blog.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Show more blogs &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
