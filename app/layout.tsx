import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrossView Consultants | Real Estate Bookkeeping, Property Accounting & Financial Analysis",
  description: "Expert Real estate bookkeeping, Property Accounting and Financial Analysis services tailored for property management companies and real estate professionals. Experts in Yardi, AppFolio, QuickBooks, Entrata, Buildium & Real Page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
