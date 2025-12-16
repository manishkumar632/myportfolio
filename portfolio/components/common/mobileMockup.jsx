"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  User,
  Filter,
  ChevronDown,
  ShoppingBag,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";
import KicksStoreUI from "../home/KicksStoreUI";

const MobileMockup = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-8">
      {/* Outer Phone Bezel */}
      <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[3.5rem] h-[700px] w-[360px] shadow-xl">
        {/* Hardware Buttons - Left Side (Volume/Mute) */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>

        {/* Hardware Button - Right Side (Power) */}
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

        {/* Screen Container */}
        <div className="rounded-[2.5rem] z-20 overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
          {/* Status Bar */}
          <div className="absolute top-0 pt-4 bg-white w-full h-[44px] z-50 px-4 bg-transparent text-black flex items-center justify-between">
            {/* Left: Service Text */}
            <div className="text-[15px] font-semibold tracking-wide text-black">
              service
            </div>

            {/* Right: Status Icons */}
            <div className="flex items-center gap-2 text-black">
              <Signal className="w-4 h-4 stroke-black " />
              <Wifi className="w-4 h-4 stroke-black" />
              <div className="w-6 h-3 border border-black rounded-[4px] relative">
                <div className="absolute inset-0.5 bg-black w-3/4 rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* Dynamic Island (Notch) */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center pointer-events-none">
            {/* Camera lens reflection simulation */}
            <div className="absolute right-3 w-3 h-3 rounded-full bg-[#1a1a1a] shadow-inner ring-1 ring-gray-800/50"></div>
          </div>

          {/* Scrollable Content Area (The Webview) */}
          <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-12 pb-8 bg-gray-50">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[130px] h-[5px] bg-black rounded-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <MobileMockup>
      <KicksStoreUI />
    </MobileMockup>
  );
}
