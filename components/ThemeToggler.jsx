"use client";

import { Lightbulb, LightbulbOff } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  return (
    <div>
      <Button>Toggle Theme</Button>
      <Lightbulb />
      <LightbulbOff />
    </div>
  );
};

export default ThemeToggler;
