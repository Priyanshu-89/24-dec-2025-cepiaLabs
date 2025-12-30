import { FaArrowRight } from "react-icons/fa";

export default function FinalCTA() {
  return (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/11.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 text-center px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-[#dadada] mb-6">
      Ready to Transform Your Healthcare?
    </h2>

    <p className="text-[#dadada] text-lg mb-12 max-w-2xl">
      Join thousands of patients and doctors using our secure,
      AI-powered telehealth platform every day.
    </p>

    <button className="group inline-flex items-center gap-3 bg-[#92d2ed] text-[#5f95ad] px-10 py-3 rounded-full font-semibold text-lg shadow-xl transition hover:scale-105">
      Get Started Today
      <FaArrowRight className="transition-transform group-hover:translate-x-2" />
    </button>

    <p className="text-[#dadada] text-lg mt-6">
      No credit card required · Secure & HIPAA-compliant
    </p>
  </div>
</section>

  );
}
