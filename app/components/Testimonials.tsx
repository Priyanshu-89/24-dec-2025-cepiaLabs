import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya S.",
    role: "Patient",
    text: "Fast service and excellent video quality.",
    image: "/10.png",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Doctor",
    text: "Streamlined workflow, time-saving.",
    image: "/9.png",
  },
  {
    name: "Amit P.",
    role: "Patient",
    text: "Symptom checker provided peace of mind.",
    image: "/8.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#06685B] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-[#F97C21] mb-4">
           TESTIMONIALS
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Real stories from people using our platform every day.
          </p>
        </div>

       
        <div className="relative flex flex-col gap-16">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`
                relative max-w-2xl
                bg-white/5 backdrop-blur-lg 
                rounded-2xl px-10 py-3
                border border-white/10
                hover:border-[#F97C21]
                hover:shadow-2xl
                transition-all duration-300
                ${index === 1 ? "ml-16" : ""}
                ${index === 2 ? "ml-32" : ""}
              `}
            >
           
              <FaQuoteLeft className="absolute top-8 right-8 text-[#F97C21]/20 text-6xl" />

          
              <p className="text-lg text-white/90 leading-relaxed mb-10">
                “{t.text}”
              </p>

           
              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#F97C21]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[#F97C21] font-semibold text-lg">
                    {t.name}
                  </p>
                  <p className="text-sm text-white/60">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
