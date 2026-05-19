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
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
