"use client";
import { projectData } from "@/data/projectData";
import Link from "next/link";
import React, { useState } from "react";
import { VscJson } from "react-icons/vsc";
const ProjectCard = () => {
  const [projectName, setProjectName] = useState("Zithara.ai");
  return (
    <>
      <div className="w-full md:max-w-[70%] rounded-md border border-[#1b2c68a0]  bg-gradient-to-r to-[#14151a] from-[#1b1e27]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent vai-pink-500 to-violet-600 "></div>
          <div className="h-[1px] w-full bg-gradient-to-r to-transparent from-violet-600 "></div>
        </div>
        <div className="py-5 px-4 md:px-7 flex items-center">
          <div className="flex items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green"></div>
          </div>
          <div className="text-center w-full text-2xl font-bold">
            {projectName}
          </div>
        </div>
        <div className="overflow-auto flex items-center space-x-2 border-t-[1px] py-3 px-2 lg:px-4 border-indigo-500">
          {projectData.map((item) => (
            <div
              key={item.name}
              className={`flex flex-row gap-2 items-center bg-cardBg shadow-md px-3 py-2 rounded-md hover:border-purple  border cursor-pointer ${
                item.name === projectName
                  ? "border-purple text-yellow"
                  : "border-gray-900"
              }`}
              onClick={() => setProjectName(item.name)}
            >
              <span className="">
                <VscJson className="fill-yellow" />
              </span>
              <span>{item.fileName}</span>
            </div>
          ))}
        </div>
        {projectData
          .filter((item) => item.name === projectName)
          .map((project, index) => (
            <React.Fragment key={index}>
              <div className=" overflow-auto flex items-center space-x-2 border-t-[1px] border-gray-500 px-4 lg:px-12 py-4 lg:py-8">
                <code className="text-sm md:text-base">
                  <div className="blink">
                    <span className="text-purple mr-2 ">const</span>
                    <span className="text-yellow mr-2 ">project</span>
                    <span className="text-sky-500 mr-2 ">=</span>
                    <span className="text-purple mr-2 ">{"{"}</span>
                  </div>
                  <div className="md:ps-14 ps-3">
                    <div>
                      <span className="text-red-500">name:</span>
                      <span className="text-yellow">
                        {"'"}
                        {project.name}
                        {"'"}
                      </span>
                      <span className="text-white">{", "}</span>
                    </div>
                    {project.url && (
                      <div>
                        <span className="text-red-500">url:</span>
                        <Link href={project.url}>
                          <span className="text-yellow underline">
                            {"'"}
                            {project.url}
                            {"'"}
                          </span>
                        </Link>
                        <span className="text-white">{", "}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-red-500">tools:</span>
                      <span className="text-gray-400">{` [`}</span>
                      <span className="text-green">{`'`}</span>
                      {project.technologies_used.map((item, i) => (
                        <React.Fragment key={i}>
                          <span className="text-green">{item}</span>
                          {project.technologies_used.length - 1 !== i && (
                            <span className="text-green">{"', '"}</span>
                          )}
                        </React.Fragment>
                      ))}
                      <span className="text-green">{`'`}</span>

                      <span className="text-gray-400">{"],"}</span>
                    </div>
                    <div>
                      <span className="text-red-500">myRoll :</span>
                      <span className="text-yellow">
                        {"'"}
                        {project.roll}
                        {"'"}
                      </span>
                      <span className="text-white">{", "}</span>
                    </div>
                    <div>
                      <span className="text-red-500">responsibilities :</span>
                      <span className="text-green">
                        {"'"}
                        {project.responsibilities}
                        {"'"}
                      </span>
                      <span className="text-white">{", "}</span>
                    </div>
                    <div>
                      <span className="text-red-500">Discretion :</span>
                      <span className="text-green">
                        {"'"}
                        {project.description}
                        {"'"}
                      </span>
                      <span className="text-white">{", "}</span>
                    </div>
                  </div>
                  <span className="text-purple mr-2 ">{"}"}</span>
                </code>
              </div>
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default ProjectCard;
