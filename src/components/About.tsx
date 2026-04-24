export default function About() {
  const values = [
    { icon: "🏠", title: "Locally Owned", desc: "A local family business proud to serve Windsor & Northern Colorado." },
    { icon: "🛡️", title: "Bonded & Fully Insured", desc: "Every job is covered — your home is in safe hands." },
    { icon: "📋", title: "No Contracts", desc: "No commitments, no fine print. Just great service every time." },
    { icon: "✅", title: "Service Guarantee", desc: "Not happy? We come back and re-clean for free. Period." },
    { icon: "🌿", title: "Safe Cleaning Products", desc: "Natural cleaners tough on stains, safe for your family and pets." },
    { icon: "🐾", title: "Pet Friendly", desc: "Specialized treatments that eliminate pet stains and odors at the source." },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-white mb-4">A Small, Family‑Owned Steam Cleaning Company You Can Actually Trust</h2>
          <p className="text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Locally owned and family operated, we believe great service comes from personal accountability, not large crews or rotating technicians. When you choose us, you're choosing real people who take pride in every job.
          </p>
        </div>

        {/* Story + Daniel Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Meet Daniel Hernandez</h3>
            <p className="text-purple-100 leading-relaxed mb-4">
              This is not a franchise or a big call center operation. We're a small family‑owned business, and Daniel Hernandez is the owner and primary operator. The face you see here is the same person who shows up at your door and completes your service.
            </p>
            <p className="text-purple-100 leading-relaxed mb-4">
              That hands‑on approach is intentional — it ensures consistent quality, attention to detail, and a level of care you simply don't get from larger companies.
            </p>
            <p className="text-purple-100 leading-relaxed mb-8">
              When additional help is needed, all team members are carefully vetted, background‑checked, trained, and supervised so your home is always in trusted hands.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Family Owned & Operated",
                "Owner‑Operator Service",
                "Bonded & Fully Insured",
                "No Contracts",
                "Service Guarantee",
                "Eco‑Friendly Products",
                "Free Estimates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-purple-100 text-sm">
                  <span className="text-green-400 text-lg font-bold">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Daniel Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50">
              <img src="/daniel-1.jpeg" alt="Daniel Hernandez - Owner of Unique Steam Cleaning" className="w-full h-[320px] sm:h-[500px] object-cover object-top" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl">
              <p className="text-[#7B2FBE] font-bold text-lg">5+ Years</p>
              <p className="text-gray-500 text-xs">Serving Northern Colorado</p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white">What Sets Us Apart</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition">
              <div className="text-3xl mb-3">{value.icon}</div>
              <h4 className="text-white font-bold mb-2">{value.title}</h4>
              <p className="text-purple-200 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="tel:9708891115" className="inline-block text-[#7B2FBE] bg-white font-semibold px-8 py-4 rounded-full text-lg transition hover:bg-purple-50 shadow-lg">Call Us Now — (970) 889-1115</a>
        </div>

      </div>
    </section>
  );
}
