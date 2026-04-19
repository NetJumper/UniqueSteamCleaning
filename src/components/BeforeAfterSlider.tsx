"use client";

import { useState, useEffect } from "react";

interface Slide {
  src: string;
  label: "Before" | "After";
  position?: string;
}

interface Props {
  slides?: Slide[];
  beforeSrc?: string;
  afterSrc?: string;
  beforePosition?: string;
  afterPosition?: string;
}

export default function BeforeAfterSlider({
  slides,
  beforeSrc,
  afterSrc,
  beforePosition = "center center",
  afterPosition = "center center",
}: Props) {
  const resolvedSlides: Slide[] = slides ?? [
    { src: beforeSrc!, label: "Before", position: beforePosition },
    { src: afterSrc!, label: "After", position: afterPosition },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === resolvedSlides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [resolvedSlides.length]);

  const slide = resolvedSlides[current];

  return (
    <div className="relative w-full h-64 overflow-hidden">

      {resolvedSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={s.src}
            alt={s.label}
            className="w-full h-full object-cover"
            style={{ objectPosition: s.position ?? "center center" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
        </div>
      ))}

      {/* Label */}
      <div className="absolute bottom-3 left-4 z-10">
        <span className={`${slide.label === "Before" ? "bg-red-500" : "bg-green-500"} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {slide.label}
        </span>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 right-4 flex gap-2 z-10">
        {resolvedSlides.map((_, i) => (
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
