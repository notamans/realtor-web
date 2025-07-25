import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealtyPlus - Your Trusted Real Estate Partner",
  description:
    "Find your dream home with RealtyPlus. Browse luxury condos, family homes, and investment properties. Expert agents, personalized service, and market insights.",
  keywords:
    "real estate, homes for sale, condos, apartments, property, realtor, buy house, sell house",
  authors: [{ name: "RealtyPlus" }],
  openGraph: {
    title: "RealtyPlus - Your Trusted Real Estate Partner",
    description:
      "Find your dream home with RealtyPlus. Expert real estate services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
