import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold max-w-4xl mx-auto drop-shadow-2xl">
          "Feel confident every day. <br /> 
          Premium comfort, the best choices curated just for you."
        </h1>

         <div className="flex justify-center items-center mt-10">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-0.5 active:scale-95">
            Shop Now!
          </button>
          
        </div> 
    </main>
  );
}
  

