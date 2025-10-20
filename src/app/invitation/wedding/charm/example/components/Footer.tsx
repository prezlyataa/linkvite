"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#37585c] text-[#f5eee3] py-12 px-6 relative overflow-hidden">
      {/* Верхня декоративна лінія */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-[#f5eee3]/20"
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="max-w-6xl mx-auto text-center flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Лого / назва */}
        <motion.h3
          className="text-base md:text-lg font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Зроблено в Momento
        </motion.h3>

        {/* Лінки */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://momento.link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d6cfbf] transition-colors"
          >
            momento.link
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d6cfbf] transition-colors flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d6cfbf] transition-colors flex items-center gap-2"
          >
            <FaTelegramPlane /> Telegram
          </a>
        </motion.div>

        {/* Права */}
        <motion.p
          className="text-xs md:text-sm text-[#f5eee3]/60 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} Momento — усі права захищено
        </motion.p>
      </motion.div>

      {/* Декоративна хвиля */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 text-[#f5eee3]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="#e3d7c3"
      >
        <path d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,69.3C672,53,768,43,864,53.3C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </footer>
  );
}
