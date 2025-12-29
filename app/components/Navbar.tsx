"use client";
import Link from "next/link";
import { useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import { FiActivity, FiCpu, FiMessageSquare, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineMedicalServices } from "react-icons/md";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Services", icon: <MdOutlineMedicalServices /> },
    { name: "How It Works", icon: <FiActivity /> },
    { name: "AI Features", icon: <FiCpu /> },
    { name: "Testimonials", icon: <FiMessageSquare /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#73A6BB] backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
   
        <div className="flex items-center gap-2 font-bold text-2xl text-[#E9F1F4]">
          <FaStethoscope className="text-gradient from-[#E9F1F4] to-[#FFDDFF]" />
          <span className="bg-clip-text text-transparent bg-[#E9F1F4]">
            TeleHEALTH
          </span>
        </div>

        
        <ul className="hidden md:flex items-center gap-8 text-[16px] text-[#E9F1F4]">
          {links.map((link) => (
            <li
              key={link.name}
              className="flex items-center gap-1 cursor-pointer group relative hover:text-[#C6DAE5] transition-all duration-300"
            >
              {link.icon} {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5  bg-[#C6DAE5] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

    
        <Link href={"/"} className="hidden md:inline-flex bg-[#0d5776] text-[#73A6BB] px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started
        </Link>

   
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white text-2xl">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <div key={link.name} className="flex items-center gap-2 text-white hover:text-[#F97C21] transition">
              {link.icon} {link.name}
            </div>
          ))}
          <button className="mt-4 bg-[#F97C21] text-[#06685B] px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
