const stats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "10+", label: "Years Experience" },
  { value: "5.0★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function Stats() {
  return (
    <section className="py-10 px-6 bg-[#6D28D9]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl md:text-4xl font-extrabold text-white drop-shadow">{stat.value}</p>
            <p className="text-purple-200 text-sm mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
