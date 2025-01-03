"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files as long as they have not been overwritten.",
    },
    {
      id: 2,
      question: "Does the software support external drives?",
      answer:
        "Yes, the software supports external drives including USB drives and SD cards.",
    },
    {
      id: 3,
      question: "How do I activate the premium version?",
      answer:
        "You can activate the premium version using the activation key provided after purchase.",
    },
    {
      id: 4,
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial with limited features.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-8">
          <span className="text-yellow-500">FAQ</span>
          <br />
          Frequent Ask Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-gray-500">
                  {expanded === faq.id ? "-" : "+"}
                </span>
              </button>
              {expanded === faq.id && (
                <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Show more &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
