import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Redboard - Design an RP2040-powered board, get funds to build it!",
    template: "%s | Redboard",
  },
  description: "Design an RP2040-powered board, get funds to build it! A Hack Club YSWS.",
  keywords: [
    "ysws",
    "hackathon",
    "hack club",
    "programming",
    "teens",
    "electronics",
    "hardware",
    "rp2040",
    "raspberry pi",
    "microcontroller",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
