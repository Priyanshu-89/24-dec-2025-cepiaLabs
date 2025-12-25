"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { label: "Verified Doctors", value: 10000, suffix: "+", image: "/1.png" },
  { label: "Platform Uptime", value: 99.9, suffix: "%", image: "/6.png" },
  { label: "Consultations", value: 50000, suffix: "+", image: "/4.png" },
  { label: "24/7 Support", value: null, suffix: "Available", image: "/7.png" },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const target = stats[i].value;
          if (target && val < target) {
            const increment = Math.ceil(target / 100);
            return val + increment > target ? target : val + increment;
          }
          return val;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-linear-to-br from-[#06685B] to-[#043D33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="relative flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-500"
          >

            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-white/20 shadow-inner">
              <Image
                src={stat.image}
                alt={stat.label}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

          
            <p className="text-4xl md:text-5xl font-bold text-[#F97C21] mb-2">
              {stat.value ? counts[i] : ""}
              {stat.suffix}
            </p>

            <p className="text-sm md:text-base text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>


    </section>
  );
}
