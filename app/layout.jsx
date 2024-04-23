import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import { Outfit } from "next/font/google";
import Head from "next/head";
const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mateusz Kudraj | Experienced Web Developer",
  description:
    "Mateusz Kudraj, an experienced web developer with 3+ years in crafting responsive websites. Eager for new challenges and ready to elevate your digital presence. Let's collaborate!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="en" suppressHydrationWarning>
        <body className={outfit.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
