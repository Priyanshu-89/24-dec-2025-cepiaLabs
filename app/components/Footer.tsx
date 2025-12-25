import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#06685B] text-white py-8 overflow-hidden">


      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    
        <p className="text-sm md:text-base text-white/70">
          © 2025 Telehealth Platform · Secure • Reliable • AI-Powered Healthcare
        </p>

   
        <div className="flex items-center gap-6">
          {[FaTwitter, FaLinkedin, FaInstagram, FaFacebook].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="text-white/70 hover:text-[#F97C21] transition-colors duration-300 text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
