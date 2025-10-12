"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  date: string;
  text: string;
}

export default function Countdown({ date, text }: CountdownProps) {
  const calculateTimeLeft = () => {
    const target = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [date]);

  const blocks = [
    { label: "Днів", value: timeLeft.days },
    { label: "Годин", value: timeLeft.hours },
    { label: "Хвилин", value: timeLeft.minutes },
    { label: "Секунд", value: timeLeft.seconds },
  ];

  return (
    <section
      id="сountdown"
      className="bg-[#37585c] text-[#f5eee3] py-16 md:py-24 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Верхня декоративна іконка */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-[#d6cfbf] text-[#37585c] rounded-full flex items-center justify-center shadow-sm">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-9 h-9"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            >
              <path d="M15 40 C20 30, 30 25, 45 35" />
              <path d="M25 34 Q22 30, 24 28" />
              <path d="M30 32 Q28 28, 30 26" />
              <path d="M34 33 Q35 28, 38 27" />
              <circle cx="24" cy="28" r="1.8" fill="currentColor" />
              <circle cx="30" cy="26" r="1.8" fill="currentColor" />
              <circle cx="38" cy="27" r="1.8" fill="currentColor" />
              <circle cx="45" cy="35" r="1.8" fill="currentColor" />
            </motion.svg>
          </div>
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6 leading-snug"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Наша церемонія розпочнеться через:
        </motion.h2>

        {/* Декоративна гілочка під заголовком */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 80"
          fill="none"
          stroke="#d6cfbf"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-28 h-10 mx-auto mb-10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.6, ease: "easeInOut" }}
        >
          <path d="M20 40 C35 10, 65 10, 80 40 S115 60, 130 40 S165 10, 180 40" />
          <path d="M35 25 Q30 20, 25 25 Q30 30, 35 25 Z" fill="#d6cfbf" />
          <path d="M55 20 Q50 15, 45 20 Q50 25, 55 20 Z" fill="#d6cfbf" />
          <path d="M145 25 Q150 20, 155 25 Q150 30, 145 25 Z" fill="#d6cfbf" />
          <path d="M165 20 Q170 15, 175 20 Q170 25, 165 20 Z" fill="#d6cfbf" />
        </motion.svg>

        {/* Таймер */}
        <motion.div
          className="flex flex-wrap justify-center md:flex-nowrap border-t border-b border-[#f5eee3]/20 md:border-t-0 md:border-b-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {blocks.map(({ label, value }, idx) => (
            <motion.div
              key={label}
              className={`w-1/2 md:flex-1 px-4 py-6 relative 
        ${
          // додаємо нижню межу для верхнього ряду (мобіль)
          idx < 2 ? "border-b border-[#f5eee3]/20 md:border-b-0" : ""
        } 
        ${
          // додаємо вертикальну межу для лівих блоків (десктоп)
          idx !== blocks.length - 1 ? "md:border-r md:border-[#f5eee3]/20" : ""
        }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
            >
              <p className="text-5xl md:text-7xl font-light tracking-tight mb-3">
                {value}
              </p>
              <p className="text-lg md:text-xl text-[#f5eee3]/70">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Підпис */}
        <motion.p
          className="italic text-base md:text-lg text-[#f5eee3]/80 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
