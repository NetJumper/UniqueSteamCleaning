import { business } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">

      {/* Van photo — no overlay, full brightness */}
      <div className="absolute inset-0 z-0">
        <img src="/van.jpeg" alt="background" className="w-full h-full object-cover object-center" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center min-h-[88vh]" style={{ paddingTop: "80px" }}>
        <div className="max-w-lg">

          <p className="text-white text-sm font-semibold tracking-widest uppercase mb-3" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Locally Owned &amp; Family Operated
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
            Professional Steam Cleaning<br />Services in Northern Colorado
          </h1>

          <p className="text-white/90 mb-8 leading-relaxed font-medium" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
            Delivering top-quality steam cleaning solutions with exceptional customer care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={business.phoneLink} className="flex items-center justify-center gap-2 bg-[#6D28D9] text-white font-bold px-8 py-4 rounded-full text-lg transition shadow-lg hover:bg-[#5B21B6]">
              📞 {business.phone}
            </a>
            <a href="#contact" className="flex items-center justify-center gap-2 bg-black/25 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-full text-lg transition hover:bg-black/40 shadow-lg">
              Get a Quote →
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
