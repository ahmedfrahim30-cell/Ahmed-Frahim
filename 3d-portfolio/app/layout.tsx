import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed | 3D Artist & Designer",
  description:
    "Professional 3D portfolio showcasing mech-inspired models, characters, and environments. Specializing in hard-surface modeling and futuristic design.",
  keywords: ["3D Artist", "Portfolio", "Blender", "3D Modeling", "Mech Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}
    >
      <body className="min-h-screen bg-black">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
