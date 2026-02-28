import Image from "next/image";
import Link from "next/link";
import "@fontsource/tangerine";
import "@fontsource/tangerine/700.css";

interface Product {
  id: number;
  src: string;
  name?: string; 
}

export default function Home() {
  const bestSellers: Product[] = [
    { id: 1, name: "Diamond Silver Ring", src: "/images/1-ring.png" },
    { id: 2, name: "Gold Earrings", src: "/images/goldEar-1.png" },
    { id: 4, name: "Silver Earrings", src: "/images/sillEar-2.png" },
    { id: 3, name: "Gold Necklace", src: "/images/goldNeck-1.png" },
    { id: 13, name: "Luxury Necklace", src: "/images/goldNeck-3.png" },
    { id: 14, name: "Gold Earring Set", src: "/images/goldEar-3.png" },
    { id: 15, name: "Silver Earring Set", src: "/images/silEar-3.png" },
  ];

  const trending: Product[] = [
    { id: 5, name: "Classic Neck", src: "/images/Neck-2.png" },
    { id: 6, name: "Minimalism Ring", src: "/images/2-ring.png" },
    { id: 7, name: "Gold Neck", src: "/images/goldNeck-2.png" },
    { id: 8, name: "Silver Ear", src: "/images/silverEar-1.png" },
    { id: 16, name: "Luxury Ring", src: "/images/4-ring.png" },
    { id: 17, name: "Gold Ear", src: "/images/goldEar-2.png" },
    { id: 18, name: "Silver Neck", src: "/images/neck-1.png" },
  ];

  const sets: Product[] = [
    { id: 9, name: "Silver Luxury Set", src: "/images/silSets-1.png" },
    { id: 10, name: "Silver Minimalism Set", src: "/images/silSet-2.png" },
    { id: 11, name: "Gold Royal Set", src: "/images/goldSets-1.png" },
    { id: 12, name: "Gold Wedding Set", src: "/images/goldSets-2.png" },
  ];

  const ProductCard = ({ item }: { item: Product }) => (
    <div className="group relative aspect-[3/4] min-w-[280px] md:min-w-[320px] bg-white/10 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/20 snap-start cursor-pointer">
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
        <h3 className="text-gray-400 text-xl font-semibold tracking-wide">
          {item.name || "Jewelry Collection"}
        </h3>
        <Link href={`/shop?id=${item.id}`}>
          <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-2 cursor-pointer hover:text-black transition-colors">
            Check More Product
          </span>
        </Link>
      </div>

      <img
        src={item.src}
        className="absolute inset-0 w-150 h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        alt={item.name || "Product"}
      />
    </div>
  );

  return (
    <main className="relative w-full bg-white flex flex-col items-center">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[80vh] w-[80vw] rounded-full bg-[#c3cfdf] opacity-60 blur-[120px]" />
      </div>

      <div className="relative h-screen w-full flex flex-col items-center justify-center shrink-0">
        <div className="flex flex-col items-center leading-[0.6] select-none space-y-4 z-10">
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="text-[100px] sm:text-[160px] md:text-[240px] lg:text-[340px] text-gray-600 mr-auto -translate-x-1/4"
          >
            Eternal
          </h1>
          <h1
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="text-[100px] sm:text-[160px] md:text-[240px] lg:text-[340px] text-gray-600 ml-auto translate-x-1/4"
          >
            Elegance
          </h1>
        </div>
        <div className="absolute z-20 aspect-square w-[38vw] pointer-events-none">
          <Image
            src="/images/ring-hero-Photoroom.png"
            alt="Hero Ring"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-10 animate-bounce opacity-40">
          <span className="text-3xl tracking-widest uppercase"> ︾ </span>
        </div>
      </div>

      <div className="relative z-30 w-full max-w-7xl px-6 pb-32 space-y-4">
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap text-gray-500">
              Best Seller
            </h2>
            <div className="h-[0.5px] w-full bg-gray-500" />
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap text-gray-500">
              Trending
            </h3>
            <div className="h-[0.5px] w-full bg-gray-500" />
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {trending.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase whitespace-nowrap text-gray-500">
              Sets
            </h2>
            <div className="h-[0.5px] w-full bg-gray-500" />
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
            {sets.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <div className="flex justify-center pt-20">
          <a
            href="/signup"
            className="px-16 py-4 bg-black text-white rounded-full text-[10px] tracking-[0.3em] uppercase hover:bg-gray-800 transition-all shadow-xl"
          >
            Sign Up
          </a>
        </div>
      </div>
      <div className="relative z-30 w-full border-t border-gray-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[40vh] w-[60vw] rounded-full bg-[#c3cfdf] opacity-40 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-20 text-gray-600">
          <div className="space-y-6">
            <h2
              style={{ fontFamily: "'Tangerine', cursive" }}
              className="text-6xl text-gray-700"
            >
              Eternal Elegance
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
              Timeless jewelry crafted with elegance and precision. Discover
              pieces that define your forever.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-black transition-colors cursor-pointer">
                Home
              </li>
              <li className="hover:text-black transition-colors cursor-pointer">
                Shop
              </li>
              <li className="hover:text-black transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-black transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>ishigxen11@gmail.com</p>
              <p>+976 8886 4483</p>
              <p>Ulaanbaatar, Mongolia</p>
            </div>
          </div>
        </div>

        <div className="relative border-t border-gray-200 py-6 text-center text-xs tracking-[0.3em] uppercase text-gray-400">
          © 2026 Eternal Elegance. All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
