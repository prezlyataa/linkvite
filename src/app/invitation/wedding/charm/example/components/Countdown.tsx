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
      id="countdown"
      className="bg-[var(--charm-dark)] text-[var(--charm-light)] py-16 md:py-24 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Верхня іконка */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-[var(--charm-accent)] text-[var(--charm-dark)] rounded-full flex items-center justify-center shadow-sm">
            <motion.svg
              fill="currentColor"
              width="34px"
              height="34px"
              viewBox="0 0 164.958 164.958"
              stroke="currentColor"
              strokeWidth="0.66"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M9.418,69.238c0.005,1.68,0.01,3.262,0.316,4.941c3.111,16.991,14.502,17.396,23.04,17.133 c0.422,13.221,6.455,25.028,15.82,33.117c0.121,0.116,0.248,0.232,0.369,0.338c0.237,0.2,0.475,0.406,0.717,0.596 c10.6,9.355,26.051,15.968,46.222,16.886c2.109,0.1,4.145,0.137,6.122,0.137c27.354,0,42.52-8.774,50.525-16.427 c7.999-7.651,12.408-17.413,12.408-27.501c0-1.486-1.213-2.699-2.7-2.699s-2.7,1.213-2.7,2.699c0,8.47-3.918,17.076-10.736,23.599 c-7.831,7.483-23.298,16.153-52.677,14.798c-4.688-0.217-9.102-0.76-13.236-1.577c18.109-2.188,32.216-17.455,32.585-36.065 c0.738,0.338,1.519,0.639,2.373,0.887c1.281,0.358,2.473,0.537,3.633,0.537c6.202,0,10.194-4.92,14.982-13.42 c1.856-3.286,4.397-6.286,10.831-10.244c0.844-0.52,1.335-1.458,1.282-2.447c-0.059-0.989-0.644-1.867-1.535-2.289 c-0.512-0.243-12.661-5.983-23.847-5.983c-10.642,0-15.319,5.152-17.381,10.091c-4.836-4.496-11.138-7.43-18.114-7.987 c-0.411-1.943-1.35-3.747-2.784-5.199c-3.955-4.024-10.911-4.098-14.956-0.135c-4.156,4.092-4.213,10.8-0.132,14.953 c2.009,2.041,4.688,3.164,7.551,3.164c2.785,0,5.416-1.076,7.404-3.03c1.223-1.205,2.072-2.679,2.595-4.271 c12.698,1.086,22.729,11.646,22.729,24.619c0,17.481-14.229,31.715-31.715,31.715c-9.635,0-18.478-3.406-25.423-9.065 c-9.423-8.416-14.396-19.195-14.813-29.815c0.111,0,0.2,0,0.311,0.005c1.039,0.032,2.125,0.074,3.233,0.074l0,0 c8.005,0,17.55-1.951,20.334-17.197c0.312-1.679,0.316-3.261,0.322-4.946c0.016-4.988,0.032-10.642,8.775-21.131 c0.606-0.728,0.786-1.727,0.47-2.623c-0.312-0.896-1.081-1.561-2.015-1.748c-0.48-0.093-10.673-1.777-20.472,3.525 c-0.522-2.917-1.439-5.39-2.283-7.652c-1.714-4.59-2.942-7.899-0.648-13.263c0.396-0.912,0.248-1.978-0.375-2.755 c-0.623-0.781-1.635-1.145-2.605-0.96c-0.459,0.087-11.317,2.23-17.323,11.063c-2.605,3.823-3.897,8.269-3.85,13.263 c-9.545-4.909-19.412-3.309-19.881-3.217c-0.934,0.188-1.693,0.852-2.015,1.748c-0.316,0.896-0.132,1.896,0.469,2.624 C9.376,58.596,9.392,64.249,9.418,69.238z M81.016,74.261c-1.967,1.938-5.374,1.912-7.314-0.071 c-1.999-2.03-1.962-5.313,0.068-7.317c0.97-0.954,2.257-1.479,3.618-1.479c1.403,0,2.716,0.552,3.697,1.556 c0.965,0.984,1.492,2.289,1.481,3.671C82.556,71.999,82.002,73.288,81.016,74.261z M110.363,79.634 c1.671-5.374,5.869-7.981,12.856-7.981c6.075,0,12.714,2.02,16.991,3.597c-3.845,2.871-6.418,5.751-8.438,9.312 c-5.374,9.524-7.805,11.654-12.44,10.342c-2.099-0.597-3.485-1.566-4.145-2.885c-0.586-1.197-0.554-2.531-0.386-3.544 c3.201-7.604,8.981-7.496,9.292-7.454c1.461,0.037,2.758-1.01,2.869-2.483c0.11-1.484-0.997-2.787-2.479-2.906 c-0.375-0.026-7.82-0.485-12.836,7.259c-0.231-0.138-0.448-0.301-0.622-0.544C110.299,81.377,110.262,79.996,110.363,79.634z M23.657,54.34c0.891,0.686,2.104,0.743,3.059,0.155c0.959-0.588,1.45-1.7,1.239-2.808c-2.632-13.819,6.101-19.876,11.791-22.307 c-0.69,4.725,0.696,8.461,2.057,12.107c1.16,3.099,2.352,6.302,2.373,10.431c0.005,1.016,0.585,1.946,1.498,2.399 c0.917,0.459,2.004,0.361,2.811-0.25c5.442-4.05,11.18-5.155,15.335-5.303c-6.803,9.582-6.824,15.778-6.839,20.45 c-0.005,1.495-0.011,2.787-0.227,3.992c-2.157,11.775-8.606,12.751-15.029,12.751l0,0c-1.044,0-2.072-0.031-3.053-0.062 c-0.97-0.032-1.898-0.059-2.774-0.059c-0.875,0-1.803,0.026-2.769,0.059c-7.029,0.236-15.572,1.002-18.083-12.693 c-0.221-1.205-0.227-2.497-0.227-3.992c-0.021-4.672-0.042-10.871-6.845-20.45C12.245,48.924,18.12,50.084,23.657,54.34z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </motion.svg>
          </div>
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          className="text-2xl md:text-4xl mb-6 leading-snug text-[var(--charm-cream)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Наша церемонія розпочнеться через
        </motion.h2>

        {/* Декоративна гілочка */}
        <motion.svg
          fill="var(--charm-accent)"
          viewBox="0 0 191.675 191.675"
          stroke="var(--charm-accent)"
          strokeWidth="0.77"
          className="w-52 h-22 mx-auto mb-2"
        >
          {/* SVG */}
        </motion.svg>

        {/* Таймер */}
        <motion.div
          className="flex flex-wrap justify-center md:flex-nowrap border-t border-b border-[var(--charm-light)]/20 md:border-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {blocks.map(({ label, value }, idx) => (
            <motion.div
              key={label}
              className={`w-1/2 md:flex-1 px-4 py-6 relative 
                ${
                  idx < 2
                    ? "border-b border-[var(--charm-light)]/20 md:border-b-0"
                    : ""
                } 
                ${
                  idx !== blocks.length - 1
                    ? "md:border-r md:border-[var(--charm-light)]/20"
                    : ""
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
            >
              <p className="text-5xl md:text-7xl font-light tracking-tight mb-3 text-[var(--charm-light)]">
                {value}
              </p>
              <p className="text-lg md:text-xl text-[var(--charm-light)]/70">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Підпис */}
        <motion.p
          className="italic text-base md:text-lg text-[var(--charm-light)]/80 mt-10"
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
