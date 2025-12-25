import {
  FaUserPlus,
  FaSearch,
  FaCreditCard,
  FaVideo,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    title: "Register",
    desc: "Quick sign-up with phone verification (under 2 minutes)",
    icon: <FaUserPlus />,
  },
  {
    title: "Find a Doctor",
    desc: "Browse by specialty, location, language, ratings",
    icon: <FaSearch />,
  },
  {
    title: "Book & Pay",
    desc: "Select time slot, complete secure payment",
    icon: <FaCreditCard />,
  },
  {
    title: "Consult Online",
    desc: "Join video call, chat, share files, receive prescription",
    icon: <FaVideo />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#06685B] py-24">
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F97C21] mb-4">
            How It Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get quality healthcare in four simple steps — no waiting rooms, no hassle.
          </p>
        </div>

       
        <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <div key={step.title} className="relative">

            
              <div className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[#F97C21] hover:-translate-y-2 transition-all duration-300">
                
        
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-orange-100 text-[#06685B] flex items-center justify-center font-bold">
                  {index + 1}
                </div>

             
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#F97C21] text-[#06685B] text-2xl mb-6 group-hover:scale-110 transition">
                  {step.icon}
                </div>

             
                <h3 className="text-xl font-semibold text-[#F97C21] mb-3">
                  {step.title}
                </h3>

                
                <p className="text-sm text-white/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>

             
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-orange-100 text-3xl pointer-events-none">
                  <FiArrowRight />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
