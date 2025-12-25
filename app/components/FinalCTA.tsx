import { FaArrowRight } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-linear-to-br from-[#06685B] to-[#043D33] overflow-hidden">


      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

       
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F97C21] to-[#f48005] mb-6">
          Ready to Transform Your Healthcare?
        </h2>

       
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Join thousands of patients and doctors using our secure,
          AI-powered telehealth platform every day.
        </p>

       
        <button className="group relative inline-flex items-center gap-3 bg-[#F97C21] text-[#06685B] px-10 py-3 rounded-full font-semibold text-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <span className="relative z-10 flex items-center gap-3">
            Get Started Today
            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
          </span>
    
          <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#F97C21]/40 to-[#FFD700]/40 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>

      
        <p className="text-white/60 text-sm mt-6">
          No credit card required · Secure & HIPAA-compliant
        </p>
      </div>
    </section>
  );
}
