"use client";
import { useState } from "react";
import Link from "next/link";

export default function JewelryAuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <main className="min-h-screen w-full bg-[#faf9f6] flex items-center justify-center p-4 overflow-hidden">
     
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#8e70c1]/10 rounded-full blur-[100px] -z-10" />

 
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden min-h-[650px] flex border border-gray-100">
        
      
        <div className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${!isSignUp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-serif italic text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">Sign in to your collection</p>
            
            <form className="flex flex-col gap-5 w-full">
              <input type="email" placeholder="Email Address" className="jewelry-input" />
              <input type="password" placeholder="Password" className="jewelry-input" />
              <div className="text-right text-xs text-[#8e70c1] cursor-pointer hover:underline">Forgot password?</div>
              <button className="jewelry-button bg-[#2c2c2c] text-white hover:bg-[#1a1a1a]">
                Sign In
              </button>
            </form>
          </div>
        </div>


        <div className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${isSignUp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}>
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-serif italic text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">Join our exclusive circle</p>
            
            <form className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter ml-1">Full Name</label>
                 <input type="text" placeholder="Your Name" className="jewelry-input" />
              </div>
              <div className="flex flex-col gap-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter ml-1">Email Address</label>
                 <input type="email" placeholder="example@jewelry.com" className="jewelry-input" />
              </div>
              <div className="flex flex-col gap-1">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter ml-1">Password</label>
                 <input type="password" placeholder="••••••••" className="jewelry-input" />
              </div>
              <button className="jewelry-button bg-[#8e70c1] text-white mt-4 shadow-lg shadow-[#8e70c1]/20">
                Create Account
              </button>
            </form>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-[#8e70c1] transition-all duration-1000 cubic-bezier(0.68, -0.55, 0.265, 1.55) z-20 flex flex-col items-center justify-center text-white p-12 text-center
            ${isSignUp ? "translate-x-0" : "translate-x-full"}`}
          style={{ 
            backgroundImage: "linear-gradient(135deg, #8e70c1 0%, #6d52a3 100%)",
            borderRadius: isSignUp ? "0 15rem 15rem 0" : "15rem 0 0 15rem" 
          }}
        >
          <div className="z-10 animate-fadeIn">
            {isSignUp ? (
              <>
                <h2 className="text-4xl font-serif mb-4">Өөрийн гэрэлтэлтийг ол</h2>
                <p className="opacity-80 font-light mb-10 leading-relaxed text-sm">
                  Хамгийн нандин бөгөөд тансаг үнэт эдлэлийн цуглуулга таныг хүлээж байна.
                </p>
                <button 
                  onClick={() => setIsSignUp(false)}
                  className="px-12 py-3 border border-white/40 rounded-full font-medium tracking-[0.2em] text-xs hover:bg-white hover:text-[#8e70c1] transition-all duration-300"
                >
                  НЭВТРЭХ
                </button>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-serif mb-4">Шинэ гишүүн болох</h2>
                <p className="opacity-80 font-light mb-10 leading-relaxed text-sm">
                  Бидэнтэй нэгдэж, зөвхөн гишүүдэд зориулсан онцгой хямдрал, шинэ загварын мэдээллийг аваарай.
                </p>
                <button 
                  onClick={() => setIsSignUp(true)}
                  className="px-12 py-3 border border-white/40 rounded-full font-medium tracking-[0.2em] text-xs hover:bg-white hover:text-[#8e70c1] transition-all duration-300"
                >
                  БҮРТГҮҮЛЭХ
                </button>
              </>
            )}
          </div>
          
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full scale-150" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/5 rounded-full scale-125" />
          <span className="absolute bottom-10 text-5xl opacity-20 pointer-events-none">✨</span>
        </div>
      </div>

      <style jsx global>{`
        .jewelry-input {
          @apply w-full px-5 py-3.5 rounded-lg border border-gray-100 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20 outline-none transition-all bg-[#faf9f6] text-sm font-light;
        }
        .jewelry-button {
          @apply w-full font-semibold py-4 rounded-lg transition-all duration-300 active:scale-[0.98] tracking-widest text-xs uppercase;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}