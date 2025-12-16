"use client";

import { useState } from "react";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Portfolio", "Exhibitions", "Contact"];

  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Left: Logo (two circles) */}
        <div className="flex items-center gap-1">
          <span className="inline-block h-4 w-4 rounded-full bg-black" />
          <span className="inline-block h-4 w-4 rounded-full bg-black" />
        </div>

        {/* Center: Navigation (desktop/tablet) */}
        <div className="hidden md:flex items-center text-sm lg:text-base text-gray-900">
          {navItems.map((item, idx) => (
            <div key={item} className="flex items-center">
              <a
                href="#"
                className="px-3 lg:px-4 py-2 hover:text-gray-600 transition-colors"
              >
                {item}
              </a>
              {idx < navItems.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Right: Event pill + mobile menu button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">
            <StarsRoundedIcon />
            <span className="text-xs sm:text-sm text-gray-900">
              Manish, 02 Sep, 2001
            </span>
            {/* circular Avatar - profile image */}
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1739178656537-ea88ababab9b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Manish"
                className="h-8 w-8 rounded-full object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
