"use client";

import { Moon, SunMedium } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full"
      >
        <SunMedium className=" rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <Moon className=" absolute  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
