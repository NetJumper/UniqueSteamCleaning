import { reviews } from "@/data/content";

export default function Reviews() {
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
            <span className="text-purple-200 text-sm ml-2">5.0 on Google</span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7B2FBE] flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{review.name}</p>
                  <p className="text-purple-300 text-xs">Verified Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-purple-100 mb-4">Ready to experience the difference?</p>
          <a href="tel:9708891115" className="inline-block text-white font-semibold px-8 py-4 rounded-full text-lg transition hover:opacity-90 bg-[#7B2FBE]">Book Your Cleaning Today</a>
        </div>

      </div>
    </section>
  );
}
