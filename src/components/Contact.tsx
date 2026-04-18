"use client";

import { useState } from "react";
import { business } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please call us directly at (970) 889-1115.");
      }
    } catch {
      alert("Something went wrong. Please call us directly at (970) 889-1115.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7B2FBE] font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white drop-shadow">Ready For A Cleaner Home?</h2>
          <p className="text-purple-100 mt-4 max-w-xl mx-auto">
            Fill out the form below and Daniel will get back to you shortly to schedule your free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left - Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="text-sm text-purple-300">Phone</p>
                  <a href={business.phoneLink} className="text-white font-semibold hover:text-yellow-300 transition">{business.phone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">💬</div>
                <div>
                  <p className="text-sm text-purple-300">Text</p>
                  <a href={business.smsLink} className="text-white font-semibold hover:text-yellow-300 transition">Text Daniel Now</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">🕐</div>
                <div>
                  <p className="text-sm text-purple-300">Hours</p>
                  <p className="text-white font-semibold">{business.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="text-sm text-purple-300">Service Area</p>
                  <p className="text-white font-semibold">{business.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm text-purple-300 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#7B2FBE] flex items-center justify-center text-white text-sm hover:opacity-90 transition">f</a>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#7B2FBE] flex items-center justify-center text-white text-sm hover:opacity-90 transition">in</a>
                <a href={business.yelp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#7B2FBE] flex items-center justify-center text-white text-sm hover:opacity-90 transition">y</a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-purple-200">Thanks! Daniel will be in touch with you shortly to schedule your free estimate.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Full Name</label>
                  <input type="text" placeholder="Jane Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Phone Number</label>
                  <input type="tel" placeholder="(970) 555-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Email Address</label>
                  <input type="email" placeholder="jane@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-200 mb-1">Message</label>
                  <textarea placeholder="Tell us what you need cleaned..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-[#7B2FBE] focus:border-transparent resize-none" />
                </div>
                <button onClick={handleSubmit} disabled={loading} className="w-full text-white font-semibold py-4 rounded-xl text-sm transition hover:opacity-90 disabled:opacity-60 bg-[#7B2FBE]">
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
