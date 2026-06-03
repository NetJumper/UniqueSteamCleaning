"use client";

import { useState, useEffect, useRef } from "react";
import { reviews as defaultReviews } from "@/data/content";
import SmartPhoneLink from "@/components/SmartPhoneLink";

interface Review {
  name: string;
  text: string;
  rating: number;
  time?: string;
  photo?: string | null;
}

interface Props {
  reviews?: Review[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-white/20"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews({ reviews: sanityReviews }: Props) {
  const [reviews, setReviews] = useState<Review[]>(sanityReviews ?? defaultReviews);
  const [overall, setOverall] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews?.length) {
          setReviews(data.reviews);
          setOverall(data.overall ?? null);
          setTotal(data.total ?? null);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const pageCount = Math.ceil(reviews.length / perPage);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pageCount);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [pageCount]);

  const visible = reviews.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7B2FBE] font-semibold text-sm uppercase tracking-widest mb-3">What Customers Say</p>
          <h2 className="text-4xl font-bold text-white drop-shadow">Real Reviews From Real Customers</h2>
          <p className="text-purple-100 mt-4 max-w-xl mx-auto">
            Don't take our word for it — here's what our customers in Northern Colorado have to say.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
            <span className="text-purple-200 text-sm ml-2">
              {overall ? `${overall} on Google` : '5.0 on Google'}
              {total ? ` · ${total} reviews` : ''}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[220px]">
            {visible.map((review, i) => (
              <div key={`${current}-${i}`} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <StarRating rating={review.rating} />
                <p className="text-white/90 text-sm leading-relaxed my-4 flex-1">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  {review.photo ? (
                    <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#7B2FBE] flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white text-sm">{review.name}</p>
                    <p className="text-purple-300 text-xs">{review.time ? review.time : 'Verified Google Review'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          {pageCount > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? 'bg-white scale-125' : 'bg-white/30'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-purple-100 mb-6">Ready to experience the difference?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SmartPhoneLink href="tel:9708891115" className="inline-block text-white font-semibold px-8 py-4 rounded-full text-lg transition hover:opacity-90 bg-[#6D28D9] shadow-lg">
              Book Your Cleaning Today
            </SmartPhoneLink>
            <a
              href="https://www.google.com/search?q=Unique+Steam+Cleaning+Windsor+Colorado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition hover:bg-white/20 shadow-lg"
            >
              <span className="text-xl">⭐</span> Leave Us a Review
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
