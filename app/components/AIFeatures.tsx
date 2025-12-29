import { FaBrain, FaUserMd, FaExclamationTriangle } from "react-icons/fa";

const aiFeatures = [
  {
    title: "AI Symptom Checker",
    desc: " Natural language input → Instant triage & risk assessment",
    icon: <FaBrain />,
  },
  {
    title: "Doctor AI Assistant",
    desc: "Case summaries + differential diagnosis suggestions",
    icon: <FaUserMd />,
  },
  {
    title: "Smart Alerts",
    desc: "Real-time drug interaction warnings and allergy alerts",
    icon: <FaExclamationTriangle />,
  },
];

export default function AIFeatures() {
  return (
    <section className="relative bg-[#0d5776] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

       
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-[#dadada] mb-4">
            AI-Powered FEATURES
          </h2>
          <p className="text-[#9bcce1] max-w-3xl text-xl mx-auto">
            Intelligent AI features designed to streamline healthcare for patients and doctors.
          </p>
        </div>

     
        <div className="relative flex flex-col gap-5">

          {aiFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`relative flex items-center w-full ${
                i % 2 === 0 ? "justify-start md:justify-end" : "justify-end md:justify-start"
              }`}
            >


          
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-72 md:w-80 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500">
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#73A6BB] text-[#dadada] text-2xl mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#95cae1] mb-2">{feature.title}</h3>
                <p className="text-[16px] text-white/80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
