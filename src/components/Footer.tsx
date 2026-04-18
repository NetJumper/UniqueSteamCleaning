import { business, services } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-16 px-6 pb-28 md:pb-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="text-white font-bold text-xl mb-1">Unique Steamers</p>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-4">Northern Colorado</p>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              We specialize in carpet, area rug, hardwood floors, tile & grout, upholstery, and mattress steam cleaning services and more.
            </p>
            <p className="text-purple-200 text-sm mb-1">📞 <a href={business.phoneLink} className="hover:text-white transition">{business.phone}</a></p>
            <p className="text-purple-200 text-sm">🕐 {business.hours}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-purple-200 text-sm hover:text-white transition flex items-center gap-2">
                    <span className="text-[#7B2FBE]">›</span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Our Services", href: "#services" },
                { label: "Why Unique?", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-purple-200 text-sm hover:text-white transition flex items-center gap-2">
                    <span className="text-[#7B2FBE]">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition">f</a>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition">in</a>
              <a href={business.yelp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition">y</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-300 text-sm">© {new Date().getFullYear()} Unique Steam Cleaning. All rights reserved.</p>
          <p className="text-purple-300 text-sm">Serving Northern Colorado with pride 🟣</p>
        </div>

      </div>
    </footer>
  );
}
