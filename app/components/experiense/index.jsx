import AnimationLottie from "@/utils/animationLottiy";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../glowCard/glowCard";
import animationData from "/public/lottie/Animation - 1711178759658.json";
const Experiences = () => {
  const data = [
    {
      title: "Frontend Developer",
      comp: "gwz consultancy private limited",
      data: "march 23 - march 24",
    },
    {
      title: "Frontend Developer Intern",
      comp: "gwz consultancy private limited",
      data: "oct 22 - march 23",
    },
  ];
  return (
    <section
      id="experience"
      className="relative mt-12 lg:mt-16 z-50 border-t pt-16 pb-20 border-gray-800"
    >
      <Image
        src="/blur-23.svg"
        alt="img"
        width={1572}
        height={795}
        className="absolute bottom-0 -z-1 opacity-10 "
      />
      <Image
        src="/blur-23.svg"
        alt="img"
        width={1572}
        height={795}
        className="absolute bottom-0 rotate-180 -top-0 -z-1 opacity-10 "
      />
      <div className="flex justify-center pb-8 ">
        <div className="flex items-center">
          <span className="h-[1px] w-24 bg-blue"></span>

          <span className="bg-blue w-fit text-white  p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="h-[1px] w-24 bg-blue"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-start items-center">
          <AnimationLottie animation={animationData} width="70%" />
        </div>
        <div>
          {data.map((item) => (
            <GlowCard key={item.title}>
              <div className="text-center text-green text-base ">
                ( {item.data} )
              </div>
              <div className="flex items-center gap-6 pb-3 pt-10">
                <span className="icon">
                  <BsPersonWorkspace />
                </span>
                <div>
                  <h1 className="text-white font-semibold text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 font-medium text-base">
                    {item.comp}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
