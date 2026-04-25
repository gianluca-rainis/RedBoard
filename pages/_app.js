import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const { pathname } = useRouter();
    const hideChrome = pathname.startsWith("/dashboard");

    return (
        <ThemeProvider attribute="class" forcedTheme="dark">
            <div className="min-h-screen flex flex-col">
                <Navbar show={!hideChrome} />
                <main className="max-w-4xl w-screen mx-auto p-4">
                    <Component {...pageProps} />
                </main>
                <div className="grow"></div>
                <Footer show={!hideChrome} />
            </div>
        </ThemeProvider>
    );
}
