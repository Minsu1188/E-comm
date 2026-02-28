"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import "@fontsource/lobster-two";
import "@fontsource/quintessential";

interface HeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Header({ cartCount = 0, onCartClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full pt-10 px-8 antialiased z-50">
      <nav
        className="relative flex items-center justify-between max-w-5xl mx-auto h-12 px-6 
                   bg-white/5 backdrop-blur-md 
                   border border-white/10 rounded-full 
                   shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <span
            style={{ fontFamily: "'Quintessential', cursive" }}
            className="text-gray-500 font-bold text-[16px]"
          >
            AVENIR
          </span>
        </div>

        <ul
          style={{ fontFamily: "'Lobster Two', cursive" }}
          className="hidden md:flex items-center justify-center gap-10 text-gray-500 text-[16px] font-bold tracking-wide"
        >
          <li>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-gray-900 transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="hover:text-gray-900 transition-colors"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        <div className="flex items-center relative">
          <button
            onClick={() => onCartClick?.()}
            className="p-2 bg-white hover:bg-gray-100 text-gray-500 rounded-full transition-all active:scale-95 shadow-lg relative"
          >
            <ShoppingCart size={15} />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full animate-bounce font-sans">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
      </nav>
    </header>
  );
}
