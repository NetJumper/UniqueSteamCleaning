"use client";

import { business } from "@/data/content";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}>
      <div className="flex gap-3">
        <a
          href={business.phoneLink}
          className="flex-1 flex items-center justify-center gap-2 bg-[#6D28D9] text-white font-bold py-4 rounded-full text-base shadow-xl hover:bg-[#5B21B6] transition"
        >
          📞 Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold py-4 rounded-full text-base shadow-xl hover:bg-black/55 transition"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
