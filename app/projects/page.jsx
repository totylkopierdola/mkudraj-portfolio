"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "https://i.imgur.com/96iI9bg.png",
    category: "React",
    name: "Resorts World Sentosa",
    description:
      "Booking and Reservation Management Panel (React, Typescript, Sitecore)",
    link: "https://www.rwsentosa.com/",
    github: "",
  },
  {
    image: "https://i.imgur.com/6nFboU6.png",
    category: "React",
    name: "Ortheo3D",
    description:
      "Purchase medicine products panel \n(React, Typescript, Redux)",
    link: "https://ortheo3d.com/",
    github: "",
  },
  {
    image: "https://i.imgur.com/JrNjMlH.png",
    category: "React",
    name: "Employ Marketplace",
    description:
      "Lead-generating platform with subscribtions\n(React, Appdirect)",
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
      "Job board website for Eastern Europe\n(React, Typescript, TailwindCSS)",
    link: "https://www.getmen.com/",
    github: "",
  },
  {
    image: "https://i.imgur.com/Jwz8gnC.png",
    category: "JS",
    name: "Speednet",
    description: "Landing page for software company\n(HTML, SCSS, JS, MOBX)",
    link: "https://speednet.pl/",
    github: "",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
