"use client";
import ThemeToggler from "./ThemeToggler";
import LogoDark from "./Logo/LogoDark";
import LogoLight from "./Logo/LogoLight";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? // ? "py-4 bg-white shadow-lg dark:bg-[#32334C]"
            "py-4 bg-white shadow-lg dark:bg-[#248748]"
          : // : "py-6 dark:bg-transparent"
            "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {isClient && theme && <h2 className="6xl text-red-500">{theme}</h2>} */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 2, 1] }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <Link href="/">
              {isClient && theme === "light" ? <LogoDark /> : <LogoLight />}
            </Link>
          </motion.div>
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
