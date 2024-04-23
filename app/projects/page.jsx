"use client";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <div className="container mx-auto h-screen ">
        <span className=" absolute translate-transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-4xl">
          <Image
            src="/projects/in-progress.svg"
            width={500}
            height={500}
            className="opacity-90 hidden xl:block"
            alt=""
          />
          <span className="flex items-end whitespace-nowrap">
            <div className="xl:text-6xl xl:font-bold">Page in progress</div>
            <span className="flex ml-2 xl:mb-2 mb-2 gap-1">
              <div className="w-1 h-1 xl:w-3 xl:h-3 bg-black dark:bg-white rounded-full animate-pulse duration-1000 delay-100"></div>
              <div className="w-1 h-1 xl:w-3 xl:h-3 bg-black dark:bg-white rounded-full animate-pulse duration-1000 delay-200"></div>
              <div className="w-1 h-1 xl:w-3 xl:h-3 bg-black dark:bg-white rounded-full animate-pulse duration-1000 delay-500"></div>
            </span>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Projects;
