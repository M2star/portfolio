import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <section id="projects" className="border-gray-800 border-t relative mb-16">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full ">
          <div className="h-[1px] bg-gradient-to-r from-purple to-transparent w-full"></div>
        </div>
      </div>
      <div className="bg-blue w-fit text-white absolute -top-5 left-16 p-2 px-5 text-xl rounded-md">
        Projects
      </div>
      <div className="rounded-full w-[100px] h-[100px] bg-violet-100 -top-6 absolute translate-x-1/2 filter blur-3xl opacity-15"></div>

      <div className="flex justify-center items-center my-16">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
