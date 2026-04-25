import { Html, Head, Main, NextScript } from 'next/document'
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

export default function Document() {
  return (
    <Html lang="en-US" suppressHydrationWarning>
      <Head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/svg+xml" href="/icon.svg" />
      </Head>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
