"use client";
import { useState } from "react";
import Link from "next/link";

export default function JewelryAuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState("");

  const primaryGradient =
    "linear-gradient(138deg, rgba(211, 195, 252, 1) 0%, rgba(154, 197, 252, 1) 100%)";
  const primaryColor = "#D3C3FC";

  return (
    <main className="min-h-screen w-full bg-[#faf9f6] flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden min-h-[650px] flex border border-gray-100">
        <div
          className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${!isSignUp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}
        >
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-serif italic text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
              Sign in to your collection
            </p>

            <form className="flex flex-col gap-5 w-full border border-gray-100 rounded-3xl p-10 bg-white/50">
              <div className="flex flex-col gap-1 ">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-tighter ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="jewelry-input border border-gray-300 rounded-4xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-tighter ml-1">
                  Password
                </label>
                <input
                  type="password"
                  className="jewelry-input border border-gray-300 rounded-4xl"
                />
              </div>
              <div className="text-right text-xs text-[#9AC5FC] font-medium cursor-pointer hover:underline">
                Forgot password?
              </div>
              <button
                type="button"
                onClick={() => setMessage("Манай дэлгүүрт тавтай морил!")}
                style={{ background: primaryGradient }}
                className="jewelry-button text-white shadow-lg border-none h-11 rounded-full shadow-indigo-100"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        <div
          className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${isSignUp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
        >
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-serif italic text-gray-800 mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
              Let's shine together
            </p>

            <form className="flex flex-col gap-4 w-full border border-gray-100 rounded-3xl p-10 bg-white/50">
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-tighter ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="jewelry-input border border-gray-300 rounded-4xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-tighter ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="jewelry-input border border-gray-300 rounded-4xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-tighter ml-1">
                  Password
                </label>
                <input
                  type="password"
                  className="jewelry-input border border-gray-300 rounded-4xl"
                />
              </div>
              <button
                type="button"
                onClick={() => setMessage("Бүртгэл амжилттай үүслээ")}
                style={{ background: primaryGradient }}
                className="jewelry-button text-white mt-4 shadow-lg border-none h-11 rounded-full shadow-indigo-100"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-1000 cubic-bezier(0.68, -0.55, 0.265, 1.55) z-20 flex flex-col items-center justify-center text-white p-12 text-center
            ${isSignUp ? "translate-x-0" : "translate-x-full"}`}
          style={{
            background: primaryGradient,
            borderRadius: isSignUp ? "0 15rem 15rem 0" : "15rem 0 0 15rem",
          }}
        >
          <div className="z-10 animate-fadeIn">
            {isSignUp ? (
              <>
                <h2 className="text-3xl font-serif mb-4 italic">
                  "Үнэ цэнэ, гоо үзэсгэлэнгийн Давтагдашгүй хослол."
                </h2>
                <p className="opacity-90 font-light mb-10 leading-relaxed text-sm">
                  Хамгийн нандин бөгөөд тансаг үнэт эдлэлийн <br /> цуглуулга
                  таныг хүлээж байна.
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="px-12 py-3 border border-white/60 rounded-full font-medium tracking-[0.2em] text-xs hover:bg-white hover:text-[#9AC5FC] transition-all duration-300"
                >
                  НЭВТРЭХ
                </button>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-serif mb-4 italic">
                  Шинэ гишүүн болох
                </h2>
                <p className="opacity-90 font-light mb-10 leading-relaxed text-sm">
                  Та манайд бүртгэл үүсгэснээр хүссэн <br /> 1 бараагаа 10%-ийн
                  хямдралтай худалдаж авах урамшуулалын эзэн болох боломжтой.
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="px-12 py-3 border border-white/60 rounded-full font-medium tracking-[0.2em] text-xs hover:bg-white hover:text-[#9AC5FC] transition-all duration-300"
                >
                  БҮРТГҮҮЛЭХ
                </button>
              </>
            )}
          </div>
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full scale-150" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full scale-125" />
        </div>
      </div>

      <style jsx global>{`
        .jewelry-input {
          @apply w-full px-5 py-2.5 rounded-full border border-gray-200 focus:border-[#D3C3FC] focus:ring-1 focus:ring-[#D3C3FC]/30 outline-none transition-all bg-white/50 text-sm font-light;
        }
        .jewelry-button {
          @apply w-full font-semibold py-3 rounded-full transition-all duration-300 active:scale-[0.98] tracking-widest text-[10px] uppercase;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
      {message && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-200 px-8 py-4 rounded-full text-sm text-gray-700 animate-fadeIn">
          {message}
        </div>
      )}
    </main>
  );
}
