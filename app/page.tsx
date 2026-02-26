import Image from "next/image";
import "@fontsource/tangerine";
import "@fontsource/tangerine/700.css";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center gap-50">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2
              top-1/2 left-1/2
              w-[700px] h-[500px] rounded-[100%] 
              bg-[#c3cfdf] opacity-45 blur-[100px] z-0"
      ></div>

      <div className="relative flex flex-col items-center justify-center mt-50">
        <div className="flex flex-col items-center leading-[0.6] select-none">
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="text-[180px] md:text-[360px] text-gray-600 z-10 mr-160"
          >
            Eternal
          </h1>
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="text-[180px] md:text-[360px] text-gray-600 z-10 ml-140"
          >
            Elegance
          </h1>
        </div>

        <div className="absolute z-20 w-[300px] h-[300px] md:w-[800px] md:h-[1200px] pointer-events-none">
          <Image
            src="/images/ring-hero-Photoroom.png"
            alt="Jewelry Ring"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="mx-auto z-30">
        <button className="px-12 py-3 bg-black text-white rounded-full tracking-widest text-sm uppercase hover:scale-105 transition-all shadow-lg">
          Shop Now
        </button>
      </div>
    </main>
  );
}
