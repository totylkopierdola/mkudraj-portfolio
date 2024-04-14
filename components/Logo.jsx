"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {resolvedTheme === "light" && (
        <Image src="/LOGOdark.png" alt="logo" width={100} height={100} />
      )}
      {resolvedTheme === "dark" && (
        <Image src="/LOGOlight.png" alt="logo" width={100} height={100} />
      )}
    </>
  );
};

export default Logo;
