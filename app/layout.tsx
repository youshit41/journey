import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nocturne | Our Story",
  description: "Ultra luxury cinematic couple experience"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} grain`}>{children}</body>
    </html>
  );
}
