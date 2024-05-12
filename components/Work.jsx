"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { LuCircleSlash } from "react-icons/lu";

const projectData = [
  {
    image: "https://i.imgur.com/JrNjMlH.png",
    category: "React",
    name: "Employ Marketplace",
    description:
      "Lead-generating platform with subscription purchase option (React, Appdirect)",
    link: "https://employinc.com/",
    github: "",
  },
  {
    image: "https://i.imgur.com/qWncjGc.png",
    category: "Next.js",
    name: "Faceit Analyser v2",
    description:
      "Website for CS players statistics and news (Next.js, TailwindCSS)",
    link: "",
    github: "https://github.com/totylkopierdola/faceit-analyser-v2",
  },
  {
    image: "https://i.imgur.com/FZOxwlc.png",
    category: "React",
    name: "GetMen",
    description:
      "Job board website for Eastern Europe (React, Typescript, TailwindCSS)",
    link: "https://www.getmen.com/",
    github: "",
  },
  {
    image: "https://i.imgur.com/Jwz8gnC.png",
    category: "JS",
    name: "Speednet",
    description: "Landing page for software company (HTML, SCSS, JS, MOBX)",
    link: "https://speednet.pl/",
    github: "",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
            <LuCircleSlash
              size={20}
              className="dark:text-[#92E3A9] text-primary"
            />
            Latest Projects
          </h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects" aria-label="All projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true, color: "red" }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
