interface SiteStats {
  stat1Value?: string | null;
  stat1Label?: string | null;
  stat2Value?: string | null;
  stat2Label?: string | null;
  stat3Value?: string | null;
  stat3Label?: string | null;
  stat4Value?: string | null;
  stat4Label?: string | null;
}

interface Props {
  siteStats?: SiteStats | null;
}

const defaultStats = [
  { value: "500+", label: "Homes Cleaned" },
  { value: "5+", label: "Years Experience" },
  { value: "5.0★", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Guarantee" },
];

export default function Stats({ siteStats }: Props) {
  const stats = siteStats
    ? [
        { value: siteStats.stat1Value ?? "500+", label: siteStats.stat1Label ?? "Homes Cleaned" },
        { value: siteStats.stat2Value ?? "5+", label: siteStats.stat2Label ?? "Years Experience" },
        { value: siteStats.stat3Value ?? "5.0★", label: siteStats.stat3Label ?? "Google Rating" },
        { value: siteStats.stat4Value ?? "100%", label: siteStats.stat4Label ?? "Satisfaction Guarantee" },
      ]
    : defaultStats;

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
