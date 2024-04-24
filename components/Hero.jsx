"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import Badge from "./Badge";
import { HiBolt } from "react-icons/hi2";
import { RiBriefcase4Fill, RiTimerFlashFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none xl:overflow-hidden xl:transition-all  transform  xl:overflow-x-hidden xl:duration-1000   ${
        isVisible
          ? "xl:opacity-100 xl:translate-x-[00]"
          : "translate-x-full xl:opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, I&apos;m Mateusz Kudraj</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Experienced Frontend Developer with 3 years in React, Next.js, and
              Typescript. Proficient in Sitecore CMS, JavaScript, HTML, and CSS.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2" size="lg">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1haItTyNRx9BsTAcDAO-VevFi4OGTEr5r/view?usp=sharing"
                target="_blank"
              >
                <Button variant="secondary" className="gap-x-2" size="lg">
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[32px]  hover:text-primary transition-all hidden xl:block"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={"3"}
              badgeText="Years Of Experience"
              jumpOnHover
            />
            <Badge
              containerStyles="absolute top-[76%] -left-[1rem]"
              icon={<RiTimerFlashFill />}
              badgeText="Always on Time"
              nowrap
              jumpOnHover
            />
            <Badge
              containerStyles="absolute top-[15%] -right-8"
              icon={<HiBolt />}
              badgeText="Swift & Efficient"
              nowrap
              jumpOnHover
            />
            <div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 py-10 animate-bouncetwo"
              // style={{ animation: "bounce 10s infinite" }}
            >
              <div className="bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom" />
            </div>
            <Image
              src="/hero/coding-guy450.png"
              width={450}
              height={450}
              className="z-[1] w-[450px] h-[450px]"
              alt=""
              priority
            />
          </div>
        </div>
      </div>
      <MdKeyboardArrowDown className="text-4xl text-primary hidden  absolute left-2/4 bottom-44 xl:bottom-12 animate-bouncedeeper  md:flex" />
    </section>
  );
};

export default Hero;
