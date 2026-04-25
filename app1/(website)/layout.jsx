"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hidePaths = pathname?.startsWith("/dashboard"); // Hide the Nav and Footer on the dashboard page

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar show={!hidePaths} />
        <main className="max-w-4xl w-screen mx-auto p-4">{children}</main>
        <div className="grow"></div>
        <Footer show={!hidePaths} />
      </div>
    </>
  );
}
