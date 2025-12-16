'use client';
import React, { useState, useEffect } from "react";
// import { Menu, User, Filter, ChevronDown, ShoppingBag } from "lucide-react";
import {
  Filter,
  ChevronDown,
  Search,
  Mic,
  ShoppingCart,
  SlidersHorizontal,
  ArrowRight,
  Heart,
  Plus,
  Home,
  ShoppingBag,
  User,
} from "lucide-react";

// Product Data to match the image exactly
const products = [
  {
    id: 1,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "New",
    tagColor: "bg-blue-600",
    image: "/s1.jpg",
  },
  {
    id: 2,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "10% off",
    tagColor: "bg-orange-400",
    image: "/s2.jpg",
  },
  {
    id: 3,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "New",
    tagColor: "bg-blue-600",
    image: "s3.jpg",
  },
  {
    id: 4,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "New",
    tagColor: "bg-blue-600",
    image: "s4.jpg",
  },
  {
    id: 5,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "10% off",
    tagColor: "bg-orange-400",
    image: "s5.jpg",
  },
  {
    id: 6,
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    tag: "New",
    tagColor: "bg-blue-600",
    image: "s6.jpg",
  },
];

const slides = [
  {
    id: 1,
    image: "/s1.jpg",
    subtitle: "Limited time only",
    title: "Get 30% off",
    button: "Shop Now",
  },
  {
    id: 2,
    image: "/s2.jpg",
    subtitle: "New Arrivals",
    title: "Summer Collection",
    button: "View Lookbook",
  },
  {
    id: 3,
    image: "/s3.jpg",
    subtitle: "Best Sellers",
    title: "Comfort Redefined",
    button: "Buy Now",
  },
  {
    id: 4,
    image: "/s4.jpg",
    subtitle: "Performance",
    title: "Run Further",
    button: "Shop Sport",
  },
];

const categories = [
  {
    name: "Fashion",
    image: "/s1.jpg",
  },
  {
    name: "Beauty",
    image: "/s2.jpg",
  },
  {
    name: "Men's",
    image: "/s3.jpg",
  },
  {
    name: "Women's",
    image: "/s4.jpg",
  },
  {
    name: "Kids",
    image: "/s1.jpg",
  },
]

const KicksStoreUI = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 1500); // Increased interval to allow for smooth transition time
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      const reset = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Matches the CSS transition duration
      return () => clearTimeout(reset);
    }
  }, [currentSlide]);
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#111111]">
      {/* Header */}
      {/* New Header Section matching JSON specs */}
      <div>
        <div className="flex justify-between items-center mb-5 px-4">
          <div>
            <p className="text-sm text-gray-400">Hello,</p>
            <h1 className="text-2xl font-bold text-[#111111]">Welcome</h1>
          </div>
          <div className="relative flex flex-col items-center justify-center h-full">
            <div>
              <ShoppingCart className="w-6 h-6 text-[#111111]" />
              <span className="absolute -top-1 -right-1 bg-[#F25555] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6 px-4">
          <div className="flex-1 flex items-center bg-white rounded-full h-[44px] px-3 shadow-sm">
            <Search className="w-5 h-5 text-[#9E9E9E] mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm placeholder-[#B0B0B0] text-[#111111]"
            />
            <Mic className="w-5 h-5 text-[#9E9E9E]" />
          </div>
          <button className="w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-3 px-4">
            <h2 className="text-lg font-bold text-[#111111]">Categories</h2>
            <button className="text-[13px] font-medium text-[#7A7A7A] flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex justify-between items-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-4 pl-4 pr-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-[56px]"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-white p-1 shadow-sm overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-[12px] font-medium text-[#6E6E6E]">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="px-4 pb-10">
        {/* Hero Banner */}
        <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-lg group">
          {/* Sliding Container */}
          <div
            className={`flex h-full ${
              isTransitioning
                ? "transition-transform duration-700 ease-out"
                : ""
            }`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...slides, { ...slides[0], id: "clone" }].map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                ></div>

                {/* Gradient Overlay (Darkens left side for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between px-3 py-2">
                  <span className="uppercase tracking-widest text-[10px] font-bold text-indigo-100">
                    {slide.subtitle}
                  </span>

                  <h2 className="text-white text-[14px] drop-shadow-md max-w-[15ch]">
                    {slide.title}
                  </h2>

                  <button className="w-fit text-[10px] font-medium bg-white text-gray-900 py-1 px-2 rounded-full hover:bg-gray-100 transition-colors">
                    {slide.button}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide % slides.length === index
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex justify-between items-center mt-6 gap-4">
          <button className="flex-1 flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm">
            <span className="font-semibold text-sm">Filters</span>
            <Filter className="w-4 h-4" />
          </button>

          <button className="flex-1 flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm">
            <span className="font-semibold text-sm">Trending</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Section Title */}
        <div className="mt-8 mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Life Style Shoes</h2>
          <p className="text-sm text-gray-600 font-medium mt-1">122 items</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-[16px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="absolute top-[10px] left-[10px] w-6 h-6 bg-[#F2F2F2] rounded-full flex items-center justify-center z-10">
                <Heart className="w-3 h-3 text-[#FF4D4F] fill-[#FF4D4F]" />
              </div>
              <div className="flex w-full justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover bg-no-repeat bg-center h-[120px]"
                />
              </div>
              <div className="flex flex-col items-start px-1">
                <span className="text-[#6C63FF] text-[8px] font-semibold tracking-[0.8px] uppercase mb-1">
                  BEST SELLER
                </span>
                <h3 className="text-[#111111] text-[10px] font-medium leading-[1.2]">
                  {product.name}
                </h3>
                <span className="text-[#9E9E9E] text-[14px] font-mono mb-2">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <button className="absolute bottom-0 right-0 w-[36px] h-[36px] bg-[#6C63FF] rounded-tl-[16px] flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </button>
            </div>
          ))}
        </div>
      </main>
      <div className="absolute bottom-0 left-0 right-0 bg-white h-16 border-t border-[#EDEDED] shadow-[0_-2px_8px_rgba(0,0,0,0.04)] flex justify-around items-center z-50 pb-2">
        <button className="flex flex-col items-center justify-center active:scale-[0.92] transition-transform duration-120">
          <Home className="w-[22px] h-[22px] text-[#111111] fill-[#111111]" />
        </button>
        <button className="flex flex-col items-center justify-center active:scale-[0.92] transition-transform duration-120">
          <ShoppingBag className="w-[22px] h-[22px] text-[#B0B0B0]" />
        </button>
        <button className="flex flex-col items-center justify-center active:scale-[0.92] transition-transform duration-120">
          <Heart className="w-[22px] h-[22px] text-[#B0B0B0]" />
        </button>
        <button className="flex flex-col items-center justify-center active:scale-[0.92] transition-transform duration-120">
          <User className="w-[22px] h-[22px] text-[#B0B0B0]" />
        </button>
      </div>
    </div>
  );
};

export default KicksStoreUI;
