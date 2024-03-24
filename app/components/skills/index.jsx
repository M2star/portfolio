import { skillData } from "@/data/skillData.js";
import { skillsImage } from "@/utils/skillImage";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section
      id="skill"
      className="mb-12 lg:mb-16 relative border-t border-gray-800 "
    >
      <div className="rounded-full w-[100px] h-[100px] bg-violet-100 top-6 left-[42%] absolute translate-x-1/2 filter blur-3xl opacity-15"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4 ">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-purple to-transparent w-full"></div>
        </div>
      </div>
      <div className=" flex justify-center items-center py-12">
        <span className="h-[1px] bg-blue w-24"></span>
        <span className="bg-blue rounded-md p-2 px-5 text-base text-white">
          SKill
        </span>
        <span className="h-[1px] bg-blue w-24"></span>
      </div>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="left"
        delay={0}
        play={true}
      >
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="w-36 min-w-fit h-fit flex flex-col justify-center items-center transition-all duration-500 m-3 md:m-5 hover:scale-[1.15] cursor-pointer group relative "
          >
            <div className="h-full w-full bg-cardBg shadow-none shadow-violet-100 border border-gray-800 rounded-lg transition-all duration-500 group-hover:border-purple">
              <div className="flex justify-center p-6 items-center flex-col">
                <div className="h-8 sm:h-10">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt="skills"
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-md"
                  />
                </div>
                <p className="text-white text-sm sm:text-lg">{skill}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
