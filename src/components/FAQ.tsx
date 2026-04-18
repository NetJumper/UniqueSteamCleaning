"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does carpet take to dry?",
    a: "Most carpets dry within 2–4 hours depending on airflow and humidity. We recommend opening windows and running fans to speed up the process.",
  },
  {
    q: "Do I need to move furniture before you arrive?",
    a: "We ask that you move small items and breakables beforehand. Our team can help move larger furniture like sofas and chairs at no extra charge.",
  },
  {
    q: "Are your cleaning products safe for kids and pets?",
    a: "Absolutely. We use eco-friendly, non-toxic cleaning solutions that are safe for the whole family — including pets.",
  },
  {
    q: "How often should I get my carpets cleaned?",
    a: "We recommend every 6–12 months for most households. Homes with pets, kids, or allergy sufferers benefit from every 3–6 months.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! Just give us a call or fill out the contact form and Daniel will get back to you with a free, no-obligation estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Windsor, Fort Collins, Loveland, Greeley, Timnath, Severance, and the surrounding Northern Colorado area.",
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We back every job with a 100% satisfaction guarantee. If you're not happy, we'll come back and re-clean for free — or refund your money.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</p>
          <h2 className="text-4xl font-bold text-white drop-shadow">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <span className={`text-purple-300 text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-purple-100 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
