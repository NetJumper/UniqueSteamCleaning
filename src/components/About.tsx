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
          <h2 className="text-4xl font-bold text-white mb-4">The Most Trusted Steam Cleaning Service in Northern Colorado</h2>
          <p className="text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Family owned, locally operated, and backed by a satisfaction guarantee that no competitor can match.
          </p>
        </div>

        {/* Story + Daniel Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Meet Daniel Hernandez</h3>
            <p className="text-purple-100 leading-relaxed mb-4">
              As a locally owned and family operated business, we take immense pride in providing honest, reliable, and quality steam cleaning services you can trust.
            </p>
            <p className="text-purple-100 leading-relaxed mb-4">
              All employees are vetted through background and reference checks before undergoing our 6-week training program. We believe in doing the job right — every single time.
            </p>
            <p className="text-purple-200 font-medium italic mb-8">
              "We strive for excellence in performing flawless cleaning services."
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Locally Owned & Family Operated",
                "Bonded & Fully Insured",
                "No Contracts",
                "Service Guarantee",
                "Eco-Friendly Products",
                "Free Estimates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-purple-100 text-sm">
                  <span className="text-purple-300 text-lg">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Daniel Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50">
              <img src="/daniel-1.jpeg" alt="Daniel Hernandez - Owner of Unique Steam Cleaning" className="w-full h-[500px] object-cover object-top" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <p className="text-[#7B2FBE] font-bold text-lg">10+ Years</p>
              <p className="text-gray-500 text-xs">Serving Northern Colorado</p>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white">Our Core Values</h3>
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
