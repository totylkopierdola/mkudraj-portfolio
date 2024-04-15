import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Socials from "./Socials.jsx";
import Link from "next/link";
import LogoLight from "./Logo/LogoLight";
import LogoDark from "./Logo/LogoDark";
import { useTheme } from "next-themes";

const MobileNav = (isClient) => {
  const { theme } = useTheme();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Link href="/">
              {isClient && theme === "light" ? <LogoDark /> : <LogoLight />}
            </Link>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
