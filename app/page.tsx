import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#fafbfd] flex items-center justify-center">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center
              top-1/2 left-1/2
              w-175 h-125 rounded-[100%] 
              bg-[#c3cfdf] opacity-45 blur-[100px]"
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-10">
        <h1 className="text-[200px] font-bold text-white leading-none tracking-tighter opacity-90">
          AVENIR
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button className="px-8 py-3 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-0.5 active:scale-95">
          Shop Now!
        </button>
      </div>
      
    </div>
  );
}
