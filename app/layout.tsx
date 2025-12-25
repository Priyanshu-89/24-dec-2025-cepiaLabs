import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";


const geistSans = Montserrat({
  variable: "--font-geist-montserra",
  subsets: ["latin"],
});

const geistMono = Roboto({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Telehealth Platform",
  description: "Telehealth Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
        {children}
      </body>
    </html>
  );
}
