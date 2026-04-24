"use client";

import { useState, useEffect } from "react";
import { services } from "@/data/content";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const petVideos = [
  { src: "/dirty_petstains.MP4", label: "Before" },
  { src: "/clean_petstains.mp4", label: "After" },
];

function PetVideoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === petVideos.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const video = petVideos[current];

  return (
    <div className="relative h-64 overflow-hidden">
      <video key={current} src={video.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
      <div className="absolute bottom-3 left-4 z-10">
        <span className={`${video.label === "Before" ? "bg-red-500" : "bg-green-500"} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {video.label}
        </span>
      </div>
      <div className="absolute bottom-3 right-4 flex gap-2 z-10">
        {petVideos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${current === i ? "bg-white scale-125" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

// Slide 1: left=Before, right=After | Slide 2: bottom=Before, top=After
const rugSlides = [
  {
    src: "/rug_cleaning.1.jpeg",
    labels: [
      { text: "After",  pos: "bottom-3 left-4" },
      { text: "Before", pos: "bottom-3 right-10" },
    ],
  },
  {
    src: "/rug_cleaning.2.jpeg",
    labels: [
      { text: "Before", pos: "bottom-3 left-4" },
      { text: "After",  pos: "top-3 left-4" },
    ],
  },
];

function RugSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === rugSlides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = rugSlides[current];

  return (
    <div className="relative h-64 overflow-hidden">
      <img key={current} src={slide.src} alt="Rug cleaning" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
      {slide.labels.map((l) => (
        <div key={l.text} className={`absolute ${l.pos} z-10`}>
          <span className={`${l.text === "Before" ? "bg-red-500" : "bg-green-500"} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {l.text}
          </span>
        </div>
      ))}
      <div className="absolute bottom-3 right-4 flex gap-2 z-10">
        {rugSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${current === i ? "bg-white scale-125" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

// Gradient backgrounds per service for visual variety
const cardGradients = [
  "linear-gradient(135deg, #c084fc 0%, #818cf8 100%)",
  "linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)",
  "linear-gradient(135deg, #f472b6 0%, #c084fc 100%)",
  "linear-gradient(135deg, #34d399 0%, #60a5fa 100%)",
  "linear-gradient(135deg, #fb923c 0%, #f472b6 100%)",
  "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #f472b6 100%)",
];

const specialGradients = [
  "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
  "linear-gradient(135deg, #4ade80 0%, #22d3ee 100%)",
  "linear-gradient(135deg, #fb923c 0%, #f87171 100%)",
  "linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)",
];

export default function Services() {
  const regular = services.filter((s) => !s.special);
  const special = services.filter((s) => s.special);

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white uppercase tracking-wide drop-shadow">Our Services</h2>
          <div className="mx-auto mt-3 mb-4 h-1 w-24 rounded-full bg-[#F5C518]" />
          <p className="text-purple-100 max-w-xl mx-auto">
            From carpets to tile, we handle it all — with the same attention to detail and satisfaction guarantee on every job.
          </p>
        </div>

        {/* Regular Services — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regular.map((service, i) => (
            <div key={service.title} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              {service.title === "Carpet Cleaning" ? (
                <BeforeAfterSlider
                  beforeSrc="/dirty_carpet.jpeg"
                  afterSrc="/clean_carpet.jpeg"
                  beforePosition="55% center"
                  afterPosition="38% center"
                />
              ) : service.title === "Tile & Grout Cleaning" ? (
                <BeforeAfterSlider
                  beforeSrc="/dirty_tile.jpeg"
                  afterSrc="/clean_tile.jpeg"
                  beforePosition="center 30%"
                  afterPosition="center 30%"
                />
              ) : service.title === "Hardwood Floor Cleaning" ? (
                <BeforeAfterSlider
                  beforeSrc="/dirty_hardwood.jpeg"
                  afterSrc="/clean_hardwood.jpeg"
                  beforePosition="center 60%"
                  afterPosition="center 60%"
                />
              ) : service.title === "Upholstery Cleaning" ? (
                <BeforeAfterSlider
                  beforeSrc="/dirty_chair.jpeg"
                  afterSrc="/clean_chair.jpeg"
                  beforePosition="center center"
                  afterPosition="center center"
                />
              ) : service.title === "Pet Accidents" ? (
                <PetVideoSlider />
              ) : service.title === "Area Rug Cleaning" ? (
                <RugSlider />
              ) : service.title === "Strip & Wax" ? (
                <BeforeAfterSlider
                  beforeSrc="/strip_and_wax_before.jpeg"
                  afterSrc="/strip_and_wax_after.jpeg"
                  beforePosition="center center"
                  afterPosition="center center"
                />
              ) : service.title === "Emergency Water Extraction" ? (
                <div className="h-64 overflow-hidden">
                  <img src="/water_extraction.jpeg" alt="Water Extraction" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
                </div>
              ) : service.title === "Carpet Repair" ? (
                <BeforeAfterSlider
                  beforeSrc="/carpet_unfix.jpeg"
                  afterSrc="/carpet_fix.jpeg"
                  beforePosition="center 60%"
                  afterPosition="center 60%"
                />
              ) : (
                <div className="h-36 flex items-center justify-center text-6xl" style={{ background: cardGradients[i % cardGradients.length] }}>
                  {service.icon}
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#1A0533] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                <a href="#contact" className="mt-4 text-[#7B2FBE] font-semibold text-sm hover:underline flex items-center gap-1">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special Services */}
        <div className="rounded-3xl p-6 md:p-10 mb-14" style={{ background: "linear-gradient(135deg, #1A0533 0%, #3B0F7C 60%, #7B2FBE 100%)" }}>
          <div className="text-center mb-10">
            <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest mb-2">Also Available</p>
            <h3 className="text-3xl font-extrabold text-white uppercase tracking-wide">Special Services</h3>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#F5C518]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {special.map((service, i) => (
              <div key={service.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {service.title === "Mattress Cleaning" ? (
                  <div className="h-44 overflow-hidden">
                    <img src="/clean_matress.jpeg" alt="Clean Mattress" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
                  </div>
                ) : service.title === "Commercial Janitorial Cleaning" ? (
                  <div className="h-44 overflow-hidden">
                    <img src="/Janitoral_pic.JPG" alt="Commercial Janitorial Cleaning" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
                  </div>
                ) : (
                  <div className="h-44 flex items-center justify-center text-5xl" style={{ background: specialGradients[i % specialGradients.length] }}>
                    {service.icon}
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-[#1A0533] font-bold mb-2 text-sm">{service.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{service.description}</p>
                  <a href="#contact" className="mt-4 text-[#7B2FBE] font-semibold text-sm hover:underline flex items-center gap-1">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-purple-100 mb-4">Not sure what you need? Just give us a call.</p>
          <a href="tel:9708891115" className="inline-block text-white font-semibold px-8 py-4 rounded-full text-lg transition hover:opacity-90 bg-[#7B2FBE] shadow-lg">Call (970) 889-1115</a>
        </div>

      </div>
    </section>
  );
}
