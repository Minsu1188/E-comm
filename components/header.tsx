"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DropdownMenuDemo } from "./dropdownMenuDemo";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full bg-[#02040a] pt-8 px-8 font-sans antialiased">
      <nav className="relative flex items-center justify-between max-w-5xl mx-auto h-12 px-6 bg-white/10 backdrop-blur-none  border-white/20  border rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <span className="text-white font-semibold text-[15px] tracking-tight">
            AVENIR
          </span>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8 text-gray-400 text-[13px] font-medium">
          <li>
            <a href="/" className="hover:text-white transition-all">
              Home
            </a>
          </li>

          {/* Дропдаун цэсийг li дотор хийснээр бусадтайгаа ижил түвшинд голлоно */}
          <li className="hover:text-white transition-all">
            <DropdownMenuDemo />
          </li>

          <li>
            <a href="/seasonal" className="hover:text-white transition-all">
              Seasonal
            </a>
          </li>
          <li>
            <a href="/trending" className="hover:text-white transition-all">
              Trending
            </a>
          </li>
          <li>
            <a href="/sale" className="hover:text-white transition-all">
              Sale
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="px-5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[12.5px] font-semibold rounded-full transition-all active:scale-95">
            Sign up
          </button>
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
      </nav>
    </header>
  );
}
