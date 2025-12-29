import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { MdHealthAndSafety } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative py-10 bg-[#73A6BB]">
   

      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="rounded-3xl border border-white/40 bg-[#dadada] backdrop-blur-xl shadow-2xl">
          <div className="grid gap-12 px-8 py-14 md:grid-cols-4">
           
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#73A6BB] to-[#3a89ab] text-white font-bold text-lg">
                  <FaStethoscope/>
                </div>
                <span className="text-xl font-semibold text-[#0d5776]">
                  TeleHealth
                </span>
              </div>

              <p className="mt-4 text-[14px] font-medium text-[#0d5776]">
                Secure • Reliable • AI-Powered Healthcare
              </p>

              <ul className="mt-6 space-y-3  text-[16px] text-[#0d5776]">
                <li className="flex items-center gap-2">
                  <FiPhone /> +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <FiMail /> support@telehealth.com
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin /> Healthcare City, HC 12345
                </li>
              </ul>
            </div>

            <FooterColumn
              title="Services"
              links={[
                "Video Consultations",
                "Digital Prescriptions",
                "Medical Records",
                "Drug Interaction Checker",
              ]}
            />

            <FooterColumn
              title="Company"
              links={["About Us", "Careers", "Press", "Blog"]}
            />

            <FooterColumn
              title="Resources"
              links={[
                "Help Center",
                "Patient Guide",
                "Provider Portal",
                "API Documentation",
              ]}
            />
          </div>

          
          <div className="mx-8 flex items-center justify-center gap-2 rounded-xl border border-[#97d4ef] bg-[#73A6BB] py-3 text-[16px] font-medium text-[#0d5776]">
            <MdHealthAndSafety className="text-lg" />
            HIPAA • SOC 2 Type II • ISO 27001 Certified
          </div>

         
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 px-8 py-6 md:flex-row">
            <p className="text-[16px] text-[#0d5776]">
              © 2025 TeleHealth Platform. All rights reserved.
            </p>

            <div className="flex gap-4 text-lg text-[#0d5776]">
              <SocialIcon href="#" icon={<FiTwitter />} />
              <SocialIcon href="#" icon={<FiLinkedin />} />
              <SocialIcon href="#" icon={<FiInstagram />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-lg font-semibold uppercase underline tracking-wider text-[#0d5776]">
        {title}
      </h4>
      <ul className="space-y-4 text-[16px] text-[#1e7297]">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="transition hover:text-[#0d5776] hover:translate-x-1 inline-block"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#1e7297] transition hover:text-[#aadbf1] hover:bg-[#468dac]"
    >
      {icon}
    </Link>
  );
}
