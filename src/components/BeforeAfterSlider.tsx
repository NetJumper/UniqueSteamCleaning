"use client";

import { useState, useEffect } from "react";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforePosition?: string;
  afterPosition?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforePosition = "center center",
  afterPosition = "center center",
}: Props) {
  const slides = [
    { src: beforeSrc, label: "Before", labelColor: "bg-red-500", position: beforePosition },
    { src: afterSrc, label: "After", labelColor: "bg-green-500", position: afterPosition },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">

      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.label}
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.position }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
        </div>
      ))}

      {/* Label */}
      <div className="absolute bottom-3 left-4 z-10">
        <span className={`${slides[current].labelColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {slides[current].label}
        </span>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>

    </div>
  );
}
