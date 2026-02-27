import Image from "next/image";
import "@fontsource/tangerine";
import "@fontsource/tangerine/700.css";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center">
      {/* Blur Background */}
      <div
        className="absolute
        h-dvh w-dvw flex items-center justify-center
        rounded-full bg-[#c3cfdf] opacity-45 blur-[100px] z-0"
      />

      {/* <div className="relative flex flex-col items-center justify-center"> */}
        <div className="flex flex-col items-center leading-[0.6] select-none space-y-4">
          {/* Eternal */}
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="
              text-[90px] sm:text-[140px] md:text-[220px] lg:text-[360px]
              text-gray-600 z-10 mr-auto -translate-x-1/3
            "
          >
            Eternal
          </h1>

          {/* Elegance */}
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="
              text-[90px] sm:text-[140px] md:text-[220px] lg:text-[360px]
              text-gray-600 z-10
              ml-auto translate-x-1/4
            "
          >
            Elegance
          </h1>
        </div>

        {/* Ring Image */}
        <div
          className="
            absolute z-20
            aspect-square w-[40vw]
            -translate-y-15
            pointer-events-none
          "
        >
          <Image
            src="/images/ring-hero-Photoroom.png"
            alt="Jewelry Ring"
            fill
            className="object-contain"
            priority
          />
        </div>
      {/* </div> */}

      <div className="relative z-30 mt-10 md:mt-20">
        <button className="px-10 md:px-12 py-3 bg-black text-white rounded-full tracking-widest text-xs md:text-sm uppercase hover:scale-105 transition-all shadow-lg">
          Shop Now
        </button>
      </div>
    </main>
  );
}
