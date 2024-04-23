"use client";
import DevImg from "./ui/DevImg";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/external/tabs";
import { motion } from "framer-motion";
import { LuCircleSlash } from "react-icons/lu";
import { SiSitecore } from "react-icons/si";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import {
  MdPerson,
  MdPhoneInTalk,
  MdEmail,
  MdSchool,
  MdLocationOn,
  MdWork,
} from "react-icons/md";

import Link from "next/link";
import Technologies from "./ui/Technologies";

const infoData = [
  {
    icon: <MdPerson size={20} />,
    text: "Mateusz Kudraj",
  },
  {
    icon: <MdPhoneInTalk size={20} />,
    text: "+48 516 411 012",
  },
  {
    icon: <MdEmail size={20} />,
    text: "kudraj.mateusz@gmail.com",
  },
  {
    icon: <MdSchool size={20} />,
    text: "Computer Science student",
  },
  {
    icon: <MdLocationOn size={20} />,
    text: "Gdańsk, Poland",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Polish Naval Academy, Gdynia",
        qualification: "Bachelor of Computer Science",
        years: "2017 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "SoftServe Poland",
        role: "Frontend Developer / Sitecore Developer",
        years: "2022 - Present",
      },
      {
        company: "BLACK CORE Sp.z.o.o.",
        role: "Frontend Developer / Webmaster",
        years: "2021 - 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Javascript, HTML, CSS, SCSS, TailwindCSS, Bootstrap",
      },
      {
        name: "React, Next.js, Typescript",
      },
      {
        name: "Sitecore, GraphQL, REST API, Postman",
      },
      {
        name: "Photoshop, Figma, VSCode",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto mb-8">
          <LuCircleSlash
            size={20}
            className="dark:text-[#92E3A9] text-primary"
          />
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            {/* <motion.div
              className=""
              animate={{
                y: [-50, -40],
                rotate: [0, 2],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            > */}
            <DevImg
              containerStyles="w-[605px] h-[605px] bg-no-repeat relative scale-x-[-1] animate-bouncetwo"
              imgSrc="/about/coding-hands.svg"
            />
            {/* </motion.div> */}
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="skills">
              <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto " value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto xl:text-md text-sm"
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto "
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-4 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>
                        English (C1), <br />
                        Polish (native), <br />
                        Ukrainian (A1), <br />
                        Russian (A1)
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <MdWork />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] hover:translate-y-[84px] transition-all duration-48"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <MdSchool size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] hover:translate-y-[84px] transition-all duration-48"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="text-center xl:text-left mb-4">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <Technologies />
                  </div>
                  <div className="text-center xl:text-left mb-4">
                    <h4 className="text-xl font-semibold mb-2">Certificates</h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex flex-wrap gap-4 flex-col">
                      <Link
                        href="https://cert.efset.org/gSML9z"
                        target="_blank"
                        className="flex items-center gap-2 text-pink-500 justify-center xl:justify-start"
                      >
                        <FaExternalLinkSquareAlt className="hidden md:block" />
                        English Certificate EFSET (C1 Advanced)
                        <Image
                          className="hidden md:block"
                          src="/about/efset.png"
                          width={25}
                          height={25}
                          alt=""
                        />
                      </Link>
                      <Link
                        href="https://drive.google.com/file/d/1sHPOwyaxx9QQXYTypFWE4fZzkGEfCk7V/view"
                        target="_blank"
                        className="flex items-center gap-2 text-[#069399] justify-center xl:justify-start"
                      >
                        <FaExternalLinkSquareAlt className="hidden md:block" />
                        Sitecore OrderCloud
                        <Image
                          className="hidden md:block"
                          src="/about/sitecore-oc.png"
                          width={25}
                          height={25}
                          alt=""
                        />
                        <SiSitecore className="text-red-500" />
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
