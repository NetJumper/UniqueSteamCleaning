"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { business } from "@/data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link href="/">
          <Image src="/unique-logo.png" alt="Unique Steamers" width={140} height={50} style={{ width: "auto", height: "45px" }} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="#services" className="hover:text-yellow-300 transition">Services</Link>
          <Link href="#about" className="hover:text-yellow-300 transition">About</Link>
          <Link href="#reviews" className="hover:text-yellow-300 transition">FAQs</Link>
          <Link href="#contact" className="hover:text-yellow-300 transition">Contact</Link>
          <a href={business.phoneLink} className="bg-[#6D28D9] text-white font-bold px-5 py-2 rounded-full hover:bg-[#5B21B6] transition flex items-center gap-2 shadow-md">
            📞 {business.phone}
          </a>
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#3B0F7C]/90 backdrop-blur-sm border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Home</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Services</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">About</Link>
          <Link href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Reviews</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300 transition">Contact</Link>
          <a href={business.phoneLink} className="bg-black/30 backdrop-blur-sm border border-white/20 text-white font-bold px-4 py-2 rounded-full text-center hover:bg-black/50 transition">📞 {business.phone}</a>
        </div>
      )}
    </nav>
  );
}
