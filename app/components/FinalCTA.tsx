import { FaArrowRight } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-linear-to-br from-[#5f95ad] to-[#2f7694] overflow-hidden">


      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

       
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#0d5776] to-[#084d6a] mb-6 py-2">
          Ready to Transform Your Healthcare?
        </h2>

       
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of patients and doctors using our secure,
          AI-powered telehealth platform every day.
        </p>

       
        <button className="group relative inline-flex items-center gap-3 bg-[#0d5776] text-[#5f95ad] px-10 py-3 rounded-full font-semibold text-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10 flex items-center gap-3">
            Get Started Today
            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
          </span>

        </button>

      
        <p className="text-white/60 text-lg mt-6">
          No credit card required · Secure & HIPAA-compliant
        </p>
      </div>
    </section>
  );
}
