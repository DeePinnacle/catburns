import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caprasimo = localFont({
  src: "./fonts/Caprasimo.ttf",
  variable: "--font-caprasimo",
  weight: "100 900"
})

const workSans = localFont({
  src: "./fonts/WorkSans.ttf",
  variable: "--font-work-sans",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Cat Burns - Spotlight",
  description: "official page for award music winner Cat Burns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caprasimo.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
