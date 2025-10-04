"use client";
import { useState } from "react";
import { fontPrata } from "../../lib/fonts";

const Logo = ({ names }: { names: string }) => (
  <div className="flex flex-col items-center text-center space-y-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -5 90 30"
      className="w-24 h-10 text-[#D4C5A5] transform translate-x-2"
      fill="currentColor"
    >
      <path d="M10 10c0-5 10-5 10 0s10 5 10 0 10-5 10 0 10 5 10 0 10-5 10 0" />
    </svg>

    <span
      className={`${fontPrata.className} text-base tracking-wide text-[#efe8dc]`}
    >
      {names}
    </span>

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
                className={`${fontPrata.className} text-#efe8dc hover:text-[#d6cfbf] transition`}
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
                className={`${fontPrata.className} text-[#efe8dc] hover:text-[#d6cfbf] transition`}
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
