"use client";

import React from "react";

export default function PartnerLogosSection() {
  const partners = [
    "/img/coinbase.png",
    "/img/spotify.png",
    "/img/slack.png",
    "/img/dropbox.png",
    "/img/webflow.png",
    "/img/zoom.png",
    // "/img/google.png",
    // "/img/amazon.png",
  ];

  return (
    <section className="bg-white py-8">
      <div className=" mx-auto px-8 flex flex-wrap justify-evenly gap-8">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index}`}
            className="h-10"
          />
        ))}
      </div>
    </section>
  );
}
