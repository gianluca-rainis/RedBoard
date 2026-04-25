import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
