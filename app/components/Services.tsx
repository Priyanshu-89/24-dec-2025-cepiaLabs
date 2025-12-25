import {
  FaVideo,
  FaFilePrescription,
  FaNotesMedical,
  FaCalendarCheck,
  FaShieldAlt,
} from "react-icons/fa";
import { MdOutlineMedicalInformation } from "react-icons/md";

const services = [
  {
    title: "Video Consultations",
    desc: "Face-to-face doctor meetings via secure video",
    icon: <FaVideo />,
    color: "from-[#F97C21]",
  },
  {
    title: "Digital Prescriptions",
    desc: "Electronically signed prescriptions delivered instantly",
    icon: <FaFilePrescription />,
    color: "from-[#F97C21]",
  },
  {
    title: "Medical Records",
    desc: "Centralized storage for health documents",
    icon: <FaNotesMedical />,
    color: "from-[#F97C21]",
  },
  {
    title: "Easy Booking",
    desc: "Search doctors and book in real-time",
    icon: <FaCalendarCheck />,
    color: "from-[#F97C21]",
  },
  {
    title: "Drug Interaction Checker",
    desc: "Automated safety alerts for medications",
    icon: <MdOutlineMedicalInformation />,
    color: "from-[#F97C21]",
  },
  {
    title: "HIPAA-Grade Security",
    desc: "Military-grade encryption for data protection",
    icon: <FaShieldAlt />,
    color: "from-[#F97C21]",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 bg-linear-to-br from-[#06685B] to-[#043D33] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#F97C21] to-[#F97C21] mb-4">
          What We Offer
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-20">
          A complete, secure, and AI-powered telehealth experience designed
          for both patients and doctors.
        </p>

     
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-500
              ${i % 2 === 0 ? "translate-y-0" : "translate-y-8"}
              `}
            >
            
              <div
                className={`w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-linear-to-br ${s.color} text-white text-3xl shadow-lg transform transition-transform duration-500 group-hover:rotate-12`}
              >
                {s.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/70">{s.desc}</p>

          
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-linear-to-br from-white/20 to-white/5 blur-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
