"use client";

import React, { useEffect, useState } from "react";
import { DropdownMenuDemo } from "./dropdownMenuDemo";
import { ShoppingCart }from "lucide-react"

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full pt-10 px-8 antialiased z-50">
      <nav
        className="relative flex items-center justify-between max-w-5xl mx-auto h-12 px-6 
                      bg-white/5 backdrop-blur-md 
                      border border-white/10 rounded-full 
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <span className="text-gray-600 font-bold text-[14px]">
            AVENIR
          </span>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-13 text-gray-500 text-[14px] font-zalando tracking-wide">
          <li>
            <a href="/" className="hover:text-shadow-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="transition-colors">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="transition-colors">
              Login 
            </a>
          </li>  
        </ul>

        <div className="flex items-center">
          <button className="p-2 bg-white/10 text-gray-500 hover:bg-white/20 text-[12px] font-bold rounded-full transition-all active:scale-95 shadow-lg">
            <ShoppingCart size={15} />
          </button>
        </div>

        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      </nav>
    </header>
  );
}
