"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";


const slides = [
  {
    image: "/15.png",
    title: "Quality Healthcare",
    highlight: "at Your Fingertips",
    description:
      "Video consultations, AI-powered insights, and instant digital prescriptions — all from the comfort of your home.",
  },
  {
    image: "/12.png",
    title: "Talk to Certified Doctors",
    highlight: "Anytime, Anywhere",
    description:
      "Connect with licensed specialists through secure video calls without long hospital waits.",
  },
  {
    image: "/13.png",
    title: "Smart Health Decisions",
    highlight: "Powered by AI",
    description:
      "Get personalized health insights and recommendations using advanced AI technology.",
  },
  {
    image: "/14.png",
    title: "Digital Prescriptions",
    highlight: "Delivered Instantly",
    description:
      "Receive verified digital prescriptions and medical reports directly on your device.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const { title, highlight, description } = slides[current];

  return (
    <section className="relative h-screen overflow-hidden">

      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

    
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/80 z-10" />

  
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div
          key={current}
          className="max-w-4xl text-center space-y-6 animate-fadeUp"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            {title}
            <br />
            <span className="relative inline-block mt-3">
              <span className="absolute" />
              <span className="relative text-[#5fb3d6]">
                {highlight}
              </span>
            </span>
          </h1>

          <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>

          <button className="group inline-flex items-center gap-3 bg-[#0d5776] text-[#a6d4e6] font-semibold px-10 py-4 rounded-full text-lg hover:gap-5 transition-all duration-300 shadow-2xl">
            Book Consultation Now
            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
