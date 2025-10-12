"use client";

import { motion } from "framer-motion";

interface HeroProps {
  image: string;
  names: string;
  date: string;
  buttonText: string;
}

export default function Hero({ image, names, date, buttonText }: HeroProps) {
  const leafPaths = [
    { d: "M35 25 Q30 20, 25 25 Q30 30, 35 25 Z", delay: 1.2 },
    { d: "M55 20 Q50 15, 45 20 Q50 25, 55 20 Z", delay: 1.3 },
    { d: "M145 25 Q150 20, 155 25 Q150 30, 145 25 Z", delay: 1.4 },
    { d: "M165 20 Q170 15, 175 20 Q170 25, 165 20 Z", delay: 1.5 },
  ];

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-[#2e4b4e] overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* затемнення фону */}
      <div className="absolute inset-0 bg-black/30" />

      {/* контентна коробка */}
      <motion.div
        className="relative bg-[#d6cfbf] px-8 py-10 rounded-sm shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="italic text-lg mb-3 text-[#37585c]/70">Ми одружуємось!</p>

        {/* SVG орнамент */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 60"
          fill="none"
          stroke="#37585c"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-32 h-12 mx-auto mb-2"
        >
          {/* основна лінія */}
          <motion.path
            d="M20 40 C35 10, 65 10, 80 40 S115 70, 130 40 S165 10, 180 40"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* листочки */}
          {leafPaths.map(({ d, delay }, i) => (
            <motion.path
              key={i}
              d={d}
              fill="#37585c"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay, duration: 0.3 }}
            />
          ))}
        </motion.svg>

        {/* Текстова частина */}
        <h1 className="text-4xl md:text-5xl mb-4">{names}</h1>
        <p className="text-sm uppercase tracking-wide">{date}</p>

        {/* Кнопка */}
        <motion.a
          href="#details"
          className="inline-block mt-8 border border-[#37585c] text-[#37585c] px-5 py-2 rounded hover:bg-[#37585c] hover:text-[#f5eee3] transition-colors duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
