"use client";
import ThemeToggler from "./ThemeToggler";
import LogoDark from "./Logo/LogoDark";
import LogoLight from "./Logo/LogoLight";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);

    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-[#212132]"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            {isClient && theme === "light" ? <LogoDark /> : <LogoLight />}
          </Link>
          <div className="flex w-full justify-end items-center gap-x-6 mr-4">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
          </div>
          <div className="xl:hidden">
            <MobileNav isClient />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
