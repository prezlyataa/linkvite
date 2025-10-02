"use client";
import { useState } from "react";
import { fontPrata } from "../../lib/fonts";

function Logo({ names }: { names: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      {/* Decorative flourish */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 20"
        className="w-20 h-6 text-[#D4C5A5] ml-4" // додає відступ зліва
        fill="currentColor"
      >
        <path d="M10 10c0-5 10-5 10 0s10 5 10 0 10-5 10 0 10 5 10 0 10-5 10 0" />
      </svg>

      {/* Names */}
      <span
        className={`${fontPrata.className} text-md tracking-wide text-[#F5F5F5]`}
        style={{ color: "#f5eee3" }}
      >
        {names}
      </span>

      {/* Subtitle */}
      <span className="text-gray-200 text-xs">We&apos;re getting married!</span>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Історія кохання", href: "#story" },
    { label: "Деталі весілля", href: "#details" },
    { label: "Програма дня", href: "#programs" },
    { label: "Дрес-код", href: "#dresscode" },
    { label: "Підтвердження присутності", href: "#rsvp" },
  ];

  return (
    <>
      {/* Header завжди зверху */}
      <header className="fixed top-0 left-0 w-full bg-[#37585c] z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo & Names */}
          <div className="flex flex-col">
            {/* <span
              className={`${fontPrata.className} text-md tracking-wide`}
              style={{ color: "#f5eee3" }}
            >
              Дмитро & Ілона
            </span>
            <span className="text-sm italic"></span> */}
            <Logo names="Дмитро & Ілона" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-light text-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${fontPrata.className} transition`}
                style={{ color: "#f5eee3" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Burger / X */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {/* Mobile Fullscreen Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#37585c] flex flex-col z-40">
          {/* Top row with logo + close */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex flex-col text-white">
              <span
                className={`${fontPrata.className} text-md tracking-wide`}
                style={{ color: "#f5eee3" }}
              >
                JOHN & JANE
              </span>
              <span
                className={`${fontPrata.className} text-sm italic text-gray-200`}
                style={{ color: "#f5eee3" }}
              >
                We are getting married
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="relative w-6 h-6 cursor-pointer"
            >
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-white rotate-45"></span>
              <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-white -rotate-45"></span>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="md:hidden flex flex-col items-center justify-center flex-1 space-y-4 text-white font-light text-sm">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${fontPrata} transition`}
                onClick={() => setIsOpen(false)}
                style={{ color: "#f5eee3" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
