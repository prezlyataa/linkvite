"use client";

import { FooterSection } from "@/types/data";
import { motion } from "framer-motion";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

interface FooterProps {
  footer: FooterSection;
}

export default function Footer({ footer }: FooterProps) {
  const { sectionTitle, links, rights } = footer;

  return (
    <footer
      id="footer"
      className="bg-[var(--charm-green-dark)] text-[var(--charm-light)] py-12 px-6 relative overflow-hidden scroll-mt-20"
    >
      {/* Верхня декоративна лінія */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-[var(--charm-light)]/20"
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
        <motion.h3
          className="text-base md:text-lg font-light"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {sectionTitle}
        </motion.h3>

        {/* Лінки */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://Linkvite.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--charm-accent)] transition-colors"
          >
            {links.website}
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--charm-accent)] transition-colors flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--charm-accent)] transition-colors flex items-center gap-2"
          >
            <FaTelegramPlane /> Telegram
          </a>
        </motion.div>

        <motion.p
          className="text-xs md:text-sm text-[var(--charm-light)]/60 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} {rights}
        </motion.p>
      </motion.div>

      {/* Декоративна хвиля */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 text-[var(--charm-light)]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="var(--charm-accent)"
      >
        <path d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,69.3C672,53,768,43,864,53.3C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
      </svg>
    </footer>
  );
}
