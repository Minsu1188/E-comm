"use client";

import Header from "@/components/header";
import React, { useState, useMemo } from "react";

interface ProductType {
  id: number;
  name: string;
  category: "Earrings" | "Necklaces" | "Rings";
  material: "Gold" | "Silver";
  price: number;
  currency: string;
  src: string;
  description: string;
  specification: string;
}

interface CartItem extends ProductType {
  quantity: number;
}

const StyledSelect = ({ label, options, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-200 bg-gray-50 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 ring-black transition-all flex items-center gap-3 min-w-[160px] justify-between"
      >
        <span className="truncate">
          {value === "All" || value === "default" ? label : value}
        </span>
        <span
          className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute left-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl z-20 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
            {options.map((opt: any) => (
              <div
                key={opt.value}
                className="px-5 py-2.5 text-sm cursor-pointer hover:bg-black hover:text-white transition-colors text-gray-700 font-medium"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function JewelryShop() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );

  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterMaterial, setFilterMaterial] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("default");

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: ProductType[] = [
    {
      id: 1,
      name: "Classic Gold Hoop",
      category: "Earrings",
      material: "Gold",
      price: 120000,
      currency: "MNT",
      src: "/images/goldEar-1.png",
      description: "Тансаг зэрэглэлийн 18к алтан бүрээстэй ээмэг.",
      specification: "Материал: 18к Алт, Хэмжээ: 20мм, Жин: 1.5г",
    },
    {
      id: 2,
      name: "Silver Moon Studs",
      category: "Earrings",
      material: "Silver",
      price: 85000,
      currency: "MNT",
      src: "/images/sillEar-2.png",
      description: "Өдөр тутам зүүхэд тохиромжтой мөнгөн ээмэг.",
      specification: "Материал: 925 Мөнгө, Чулуу: Циркон",
    },
    {
      id: 3,
      name: "Royal Gold Necklace",
      category: "Necklaces",
      material: "Gold",
      price: 350000,
      currency: "MNT",
      src: "/images/goldNeck-1.png",
      description: "Онцгой баярт зориулсан алтан зүүлт.",
      specification: "Урт: 45см, Материал: 14к Цэвэр алт",
    },
    {
      id: 4,
      name: "Minimalist Silver Chain",
      category: "Necklaces",
      material: "Silver",
      price: 85000,
      currency: "MNT",
      src: "/images/Neck-2.png",
      description: "Минималист хэв маягт тохирох нарийн гинж.",
      specification: "Урт: 40см, Материал: 925 Мөнгө",
    },
    {
      id: 5,
      name: "Diamond Silver Ring",
      category: "Rings",
      material: "Silver",
      price: 500000,
      currency: "MNT",
      src: "/images/1-ring.png",
      description: "Гэрлэн дор солонгорох алмазан шигтгээтэй бөгж.",
      specification: "Хэмжээ: 16-18, Материал: 18к Алт",
    },
    {
      id: 6,
      name: "Simple Silver Band",
      category: "Rings",
      material: "Silver",
      price: 60000,
      currency: "MNT",
      src: "/images/2-ring.png",
      description: "Цэвэрхэн хийцтэй мөнгөн бөгж.",
      specification: "Хэмжээ: Сонголттой, Материал: 925 Мөнгө",
    },
    {
      id: 7,
      name: "Luxury Gold Choker",
      category: "Necklaces",
      material: "Gold",
      price: 420000,
      currency: "MNT",
      src: "/images/goldNeck-2.png",
      description: "Гоёмсог хийцтэй алтан чокер.",
      specification: "Материал: 14к Алт, Урт: 35см",
    },
    {
      id: 8,
      name: "Vintage Silver Earrings",
      category: "Earrings",
      material: "Silver",
      price: 75000,
      currency: "MNT",
      src: "/images/silverEar-1.png",
      description: "Винтаж загварын мөнгөн ээмэг.",
      specification: "Материал: 925 Мөнгө, Жин: 3.2г",
    },
    {
      id: 9,
      name: "Rose Gold Promise Ring",
      category: "Rings",
      material: "Silver",
      price: 280000,
      currency: "MNT",
      src: "/images/4-ring.png",
      description: "Ягаан алтлаг өнгөтэй амлалтын бөгж.",
      specification: "Материал: 18к Rose Gold",
    },
    {
      id: 10,
      name: "Infinity Silver Necklace",
      category: "Necklaces",
      material: "Silver",
      price: 95000,
      currency: "MNT",
      src: "/images/silverNeck-3.png",
      description: "Үүрдийн хайрыг бэлгэдэх хязгааргүй тэмдэгтэй зүүлт.",
      specification: "Материал: 925 Мөнгө",
    },
    {
      id: 11,
      name: "Pearl Gold Drop",
      category: "Earrings",
      material: "Gold",
      price: 85000,
      currency: "MNT",
      src: "/images/goldEar-2.png",
      description: "Байгалийн сувдтай алтан унждаг ээмэг.",
      specification: "Материал: 14к Алт, Байгалийн сувд",
    },
    {
      id: 12,
      name: "Snake Skin Silver Ring",
      category: "Necklaces",
      material: "Silver",
      price: 110000,
      currency: "MNT",
      src: "/images/neck-1.png",
      description: "Этгээд загварын могойн хээтэй мөнгөн бөгж.",
      specification: "Материал: 925 Мөнгө, Оксиджуулсан",
    },
    {
      id: 13,
      name: "Luxury Golden Chain",
      category: "Necklaces",
      material: "Gold",
      price: 450000,
      currency: "MNT",
      src: "/images/goldNeck-3.png",
      description:
        "Цэвэр алтан бүрээстэй, тансаг зэрэглэлийн нарийн хийцтэй зүүлт.",
      specification: "Материал: 18к Алтан бүрээс, Урт: 45см",
    },
    {
      id: 14,
      name: "Golden Heart Earrings",
      category: "Earrings",
      material: "Gold",
      price: 180000,
      currency: "MNT",
      src: "/images/goldEar-3.png",
      description:
        "Зүрхэн хэлбэртэй, ямар ч хувцаслалтад тохирох эмэгтэйлэг загварын ээмэг.",
      specification: "Материал: 14к Алт, Түгжээ: Эрвээхэй",
    },
    {
      id: 15,
      name: "Silver Crystal Drops",
      category: "Earrings",
      material: "Silver",
      price: 95000,
      currency: "MNT",
      src: "/images/silEar-3.png",
      description:
        "Гэрэлд солонгорон харагдах болор шигтгээтэй мөнгөн унждаг ээмэг.",
      specification: "Материал: 925 Мөнгө, Чулуу: Сваровски Болор",
    },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (filterCategory !== "All")
      result = result.filter((p) => p.category === filterCategory);
    if (filterMaterial !== "All")
      result = result.filter((p) => p.material === filterMaterial);
    if (sortOrder === "lowToHigh") result.sort((a, b) => a.price - b.price);
    else if (sortOrder === "highToLow")
      result.sort((a, b) => b.price - a.price);
    return result;
  }, [filterCategory, filterMaterial, sortOrder]);

  const handleAddToCart = (product: ProductType, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white min-h-screen pt-5">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <section className="max-w-7xl mx-auto pt-28 p-6 flex flex-wrap gap-4 items-center justify-between border-b mb-8">
        <div className="flex flex-wrap gap-4">
          <StyledSelect
            label="All Categories"
            value={filterCategory}
            options={[
              { label: "All Categories", value: "All" },
              { label: "Earrings", value: "Earrings" },
              { label: "Necklaces", value: "Necklaces" },
              { label: "Rings", value: "Rings" },
            ]}
            onChange={setFilterCategory}
          />

          <StyledSelect
            label="All Metals"
            value={filterMaterial}
            options={[
              { label: "All Metals", value: "All" },
              { label: "Gold", value: "Gold" },
              { label: "Silver", value: "Silver" },
            ]}
            onChange={setFilterMaterial}
          />

          <StyledSelect
            label="Sort By"
            value={sortOrder}
            options={[
              { label: "Sort By", value: "default" },
              { label: "Price: Low to High", value: "lowToHigh" },
              { label: "Price: High to Low", value: "highToLow" },
            ]}
            onChange={setSortOrder}
          />
        </div>
        <p className="text-sm text-gray-400 font-medium">
          {filteredProducts.length} items found
        </p>
      </section>


      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative aspect-3/4 overflow-hidden bg-gray-100 rounded-3xl mb-4 shadow-sm">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <button
                onClick={(e) => handleAddToCart(product, e)}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 rounded-2xl font-bold text-[10px] tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
              >
                QUICK ADD +
              </button>
            </div>
            <div className="px-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-semibold">
                {product.material} {product.category}
              </p>
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm font-bold mt-1 text-black">
                {product.price.toLocaleString()} {product.currency}
              </p>
            </div>
          </div>
        ))}
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 z-150">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-serif">Shopping Bag</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-2xl">
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 italic">
                  Your bag is empty
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-6 group">
                    <img
                      src={item.src}
                      className="w-20 h-24 object-cover rounded-xl cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(item);
                        setIsCartOpen(false);
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.price.toLocaleString()}₮
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border rounded-full px-3 py-1 scale-90 origin-left">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2"
                          >
                            -
                          </button>
                          <span className="text-sm font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] text-red-400 underline opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-bold">
                      {(item.price * item.quantity).toLocaleString()}₮
                    </p>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t bg-gray-50 space-y-4">
                <div className="space-y-2 text-sm">
                  <input
                    type="text"
                    placeholder="Shipping Address..."
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-1 ring-black bg-white"
                  />
                  <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>{totalCartPrice.toLocaleString()}₮</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="bg-white border border-black text-black py-4 rounded-xl text-[10px] font-bold tracking-widest hover:bg-black hover:text-white transition-all">
                    BANK APP
                  </button>
                  <button className="bg-black text-white py-4 rounded-xl text-[10px] font-bold tracking-widest hover:bg-gray-800 transition-all shadow-lg">
                    PAY BY CARD
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}


      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-200 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all z-10"
            >
              &times;
            </button>

            <div className="w-full md:w-1/2 h-100 md:h-auto bg-gray-50">
              <img
                src={selectedProduct.src}
                className="w-full h-full object-cover"
                alt={selectedProduct.name}
              />
            </div>

            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-[10px] text-yellow-700 font-bold tracking-[0.3em] mb-3 uppercase bg-yellow-50 self-start px-3 py-1 rounded-full">
                {selectedProduct.material} | {selectedProduct.category}
              </span>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                {selectedProduct.name}
              </h2>
              <p className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-100 pb-6">
                {selectedProduct.price.toLocaleString()}{" "}
                {selectedProduct.currency}
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">
                    About the piece
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-widest">
                    Details
                  </h4>
                  <p className="text-xs text-gray-500 italic bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    {selectedProduct.specification}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  handleAddToCart(selectedProduct, e);
                  setSelectedProduct(null);
                }}
                className="w-full bg-black text-white py-5 rounded-3xl font-bold hover:bg-gray-800 transition-all shadow-xl active:scale-[0.98] tracking-widest text-xs"
              >
                ADD TO CART & CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
