import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

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
      <div id="ixhello-root"></div>
      <Script
        id="ixhello-chat-widget"
        src="https://d3at15qgbg1tx6.cloudfront.net/chat-widget/assets/chat-widget.js"
        strategy="afterInteractive"
        data-org-id="095cf8eb-b79d-4542-9ae1-dbd9cce8ed28"
        data-chat-widget-id="f6396a19-d724-4d50-a177-75c5a74b5282"
        data-flow-id="99abb682-565f-489a-b40f-35d916060d98"
      />
    </html>
  );
}
