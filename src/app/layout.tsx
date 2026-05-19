import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fetchAllContent } from "@/sanity/queries";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await fetchAllContent();
  return {
    title: seo?.title ?? "Unique Steam Cleaning | Windsor & Northern Colorado",
    description: seo?.description ?? "Locally owned and family operated steam cleaning services in Windsor & Northern Colorado. Carpet, tile, upholstery, and more. Call (970) 889-1115.",
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.title ?? "Unique Steam Cleaning | Windsor & Northern Colorado",
      description: seo?.description ?? "Locally owned steam cleaning services in Northern Colorado.",
      type: "website",
      url: "https://uniquesteamers.com",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://uniquesteamers.com",
  "name": "Unique Steam Cleaning",
  "description": "Locally owned and family operated steam cleaning services in Windsor & Northern Colorado. Carpet, tile, upholstery, pet stains, and more.",
  "url": "https://uniquesteamers.com",
  "telephone": "+19708891115",
  "email": "",
  "priceRange": "$$",
  "image": "https://uniquesteamers.com/unique-logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Windsor",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4775,
    "longitude": -104.9011
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Windsor, CO" },
    { "@type": "City", "name": "Fort Collins, CO" },
    { "@type": "City", "name": "Loveland, CO" },
    { "@type": "City", "name": "Greeley, CO" },
    { "@type": "City", "name": "Timnath, CO" },
    { "@type": "City", "name": "Severance, CO" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Steam Cleaning Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpet Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Area Rug Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardwood Floor Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tile & Grout Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Upholstery Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Stain & Odor Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Water Extraction" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strip & Wax" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpet Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mattress Cleaning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Janitorial Cleaning" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.facebook.com/Uniquesteamcleaningco/",
    "https://www.instagram.com/unique_steamcleaning/",
    "https://yelp.to/ZdiRs1rIQV"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
