"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { PiSelectionBackgroundDuotone } from "react-icons/pi";
import { TbCircleHalf2 } from "react-icons/tb";
import { motion } from "framer-motion";
import { MdOutlineOfflineBolt } from "react-icons/md";
import { HiBolt } from "react-icons/hi2";
import { MdOutlineTimer } from "react-icons/md";
import { RiTimerFlashFill } from "react-icons/ri";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
// import DevImg from "./DevImg";
// import Badge from "./Badge";
import Socials from "./Socials";
import Image from "next/image";
import Badge from "./Badge";
import DevImg from "./DevImg";
import { useState } from "react";

const Hero = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none xl:overflow-hidden">
      <motion.div
        className=""
        variants={{
          initial: {
            opacity: 0,
            x: "20%", // Start position from the right
          },
          animate: {
            opacity: 1,
            x: 0, // End position at the center
            transition: {
              type: "spring",
              // type: "tween",
              // type: "intertia",
              stiffness: 100,
            },
          },
        }}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => setAnimationCompleted(true)}
      >
        <div className="container mx-auto">
          <div className="flex justify-between gap-x-8">
            {/* text */}
            <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Web Developer
              </div>
              <h1 className="h1 mb-4">Hello, I'm Mateusz Kudraj</h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                Experienced Frontend Developer with 3 years in React, Next.js,
                and Typescript. Proficient in Sitecore CMS, JavaScript, HTML,
                and CSS.
              </p>
              {/* buttons */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href="/contact">
                  <Button className="gap-x-2">
                    Contact me <Send size={18} />
                  </Button>
                </Link>
                <Button variant="secondary" className="gap-x-2">
                  Download CV
                  <Download size={18} />
                </Button>
              </div>
              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[32px]  hover:text-primary transition-all hidden xl:block"
              />
            </div>
            {/* image */}
            <div className="hidden xl:flex relative">
              {/* badge 1 */}
              <Badge
                containerStyles="absolute top-[24%] -left-[5rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={3}
                badgeText="Years Of Experience"
                jumpOnHover
              />
              {/* badge 2 */}
              <Badge
                containerStyles="absolute top-[76%] -left-[1rem]"
                icon={<RiTimerFlashFill />}
                // endCountNum={6}
                // endCountText="k"
                badgeText="Always on Time"
                nowrap
                jumpOnHover
              />
              {/* badge 3 */}
              <Badge
                containerStyles="absolute top-[15%] -right-8"
                icon={<HiBolt />}
                // endCountNum={9}
                // endCountText="k"
                badgeText="Swift & Efficient"
                nowrap
                jumpOnHover
              />

              <motion.div
                className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 py-10"
                animate={{
                  y: [-20, 20],
                  rotate: [0, 15],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    // repeatDelay: 0.2,
                    repeatType: "reverse",
                  },
                }}
              >
                <div className="bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom"></div>
              </motion.div>
              <Image
                src="/hero/coding-guy.png"
                width={450}
                height={450}
                className="z-[1] w-[450px] h-[450px]"
              />
            </div>
          </div>
          {/* icon */}
        </div>
        <div
          className={`hidden  absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce opacity-0 md:flex  ${
            animationCompleted &&
            " transition-opacity opacity-100 duration-1000 "
          }`}
        >
          <MdOutlineArrowDropDownCircle className="text-3xl text-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
