"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar({ dark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Home", "Courses", "Why Us", "Gallery", "Contact"];
  const bg = scrolled ? "bg-white shadow-lg" : dark ? "bg-[#0D4F8A]" : "bg-transparent";
  const txt = scrolled ? "text-gray-800" : "text-white";

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="relative h-10 w-36 block">
          <Image src="/logo/igenius-logo.png" alt="iGenius" fill className="object-contain object-left" priority />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href="#" className={`font-nunito font-700 text-sm hover:text-brand-blue transition-colors ${txt}`}>{l}</a>
          ))}
        </div>

        <a href="#demo" className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-brand-red text-white font-nunito font-800 text-sm shadow-md hover:scale-105 transition-transform">
          Book Free Demo
        </a>

        {/* Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? "#333" : "#fff"} strokeWidth="2.5" strokeLinecap="round">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white mx-4 mb-4 rounded-2xl shadow-2xl p-5 border border-gray-100">
          {links.map((l) => (
            <a key={l} href="#" className="block py-2 font-nunito font-600 text-gray-700 hover:text-brand-blue" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#demo" className="mt-3 block text-center px-5 py-3 rounded-full bg-brand-red text-white font-nunito font-800 text-sm">Book Free Demo</a>
        </div>
      )}
    </nav>
  );
}
