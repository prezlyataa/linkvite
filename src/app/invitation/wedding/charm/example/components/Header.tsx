"use client";
import { useState } from "react";

const Logo = ({ names }: { names: string }) => (
  <div className="flex flex-col items-center text-center space-y-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 60"
      fill="none"
      stroke="#D4C5A5"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-24 h-8"
    >
      <path d="M10 40 C35 5, 65 5, 90 40 S145 75, 170 40 S205 5, 230 40" />
      <path d="M50 25 Q45 18, 40 25 Q45 32, 50 25 Z" fill="#D4C5A5" />
      <path d="M190 25 Q195 18, 200 25 Q195 32, 190 25 Z" fill="#D4C5A5" />
    </svg>

    <span className={`text-base tracking-wide text-[#efe8dc]`}>{names}</span>

    <span className="text-gray-200 text-xs">Ми одружуємось!</span>
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Історія Кохання", href: "#story" },
    { label: "Деталі Весілля", href: "#details" },
    { label: "Програма Дня", href: "#program" },
    { label: "Дрес-код", href: "#dresscode" },
    { label: "Присутність", href: "#rsvp" },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-[#37585c] z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Logo names="Дмитро & Ілона" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex text-[#f5eee3] space-x-8 font-light text-sm">
            {menuItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`text-#efe8dc hover:text-[#d6cfbf] transition`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Burger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#37585c] flex flex-col z-40 animate-fade-in">
          {/* Top row */}
          <div className="flex items-center justify-between px-6 py-4">
            <Logo names="Дмитро & Ілона" />
            <button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="relative w-6 h-6 cursor-pointer"
            >
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-white rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-white -rotate-45"></span>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6 text-[#f5eee3] font-light text-lg">
            {menuItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`text-[#efe8dc] hover:text-[#d6cfbf] transition`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
