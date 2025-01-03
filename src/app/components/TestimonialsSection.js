"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: "Chris",
            designation: "President and CEO, PrintReach, USA",
            review:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 4.5,
            avatar: "/img/user1.png",
        },
        {
            id: 2,
            name: "Jane",
            designation: "Founder, ABC Tech, UK",
            review:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: 4,
            avatar: "/img/user1.png",
        },
        {
            id: 3,
            name: "Michael",
            designation: "Manager, XYZ Corp, Australia",
            review:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            rating: 5,
            avatar: "/img/user1.png",
        },
        {
            id: 4,
            name: "Sophia",
            designation: "CEO, NewGen Tech, Canada",
            review:
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            rating: 4.8,
            avatar: "/img/user1.png",
        },
        {
            id: 5,
            name: "Liam",
            designation: "CTO, Future Innovations, Germany",
            review:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            rating: 4.2,
            avatar: "/img/user1.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Dynamically set the number of visible testimonials based on screen size
    const visibleTestimonials =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - visibleTestimonials ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="bg-blue-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center pb-10">
                    <h2 className="text-3xl font-extrabold text-center md:text-left mb-6 md:mb-0">
                        What people say about us
                    </h2>
                    {testimonials.length > visibleTestimonials && (
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={handlePrev}
                                className="h-10 w-10 rounded-full bg-yellow-100 text-blue-900 shadow flex items-center justify-center"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={handleNext}
                                className="h-10 w-10 rounded-full bg-yellow-400 text-blue-900 shadow flex items-center justify-center"
                            >
                                &gt;
                            </button>
                        </div>
                    )}
                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden">
                    <div
                        className={`flex transition-transform ease-in-out duration-500`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)`,
                            width: `${testimonials.length * (100 / visibleTestimonials)}%`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={`min-w-[${100 / visibleTestimonials}%] flex-shrink-0 px-4 sm:px-6 flex justify-center`}
                            >
                                <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 max-w-md">
                                    <div className="flex flex-row justify-between items-center pb-5">
                                        <FaQuoteLeft className="text-yellow-400 text-2xl" />
                                        <div className="text-yellow-400 flex">
                                            {Array.from({ length: Math.floor(testimonial.rating) }).map(
                                                (_, i) => (
                                                    <FaStar key={i} />
                                                )
                                            )}
                                            {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                                        </div>
                                    </div>
                                    <blockquote className="mb-4 text-sm">{testimonial.review}</blockquote>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">{testimonial.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {testimonial.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
