import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-[#043D33] to-[#06685B] overflow-hidden py-32">


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        
       
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight relative">
            Quality Healthcare <br /> 
            <span className="relative text-[#F97C21]">
              at Your Fingertips

            </span>
          </h1>

          <p className="text-white/80 max-w-lg text-lg">
            Video consultations, AI-powered insights, and instant digital prescriptions — all from the comfort of your home.
          </p>

          <button className="group inline-flex items-center gap-3 bg-[#F97C21] text-[#06685B] font-semibold px-8 py-3 rounded-full text-lg hover:gap-5 hover:opacity-90 transition-all duration-300 shadow-xl">
            Book Consultation Now
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        
        <div className="relative flex justify-center">
          <Image
            src="/3.png"
            alt="Online Doctor Consultation"
            width={480}
            height={480}
            className="rounded-2xl shadow-2xl relative z-10"
            priority
          />


        </div>

      </div>
    </section>
  );
}
