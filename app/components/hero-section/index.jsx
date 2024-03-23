import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiGmail } from "react-icons/si";
const HeroSection = () => {
  const yellow = {
    name: "tushar",
    skill: [],
    hardworking: true,
    har: function () {
      return this.hardworking && this.hardworking;
    },
  };
  return (
    <section className="relative flex justify-between items-center flex-col py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-14 items-start">
        <div className="flex flex-col gap-12">
          <h1 className="md:text-5xl text-3xl font-bold text-start">
            Hello <br />
            This is
            <span className="text-yellow"> Tushar Bawame,</span> {"I'm"} a
            <span className="text-green"> Front End Developer.</span>
          </h1>
          <div className=" flex items-center gap-5">
            <span>
              <a href="https://github.com/M2star" target="_blank">
                <FaGithub
                  className="w-8 h-8 fill-yellow hover:scale-150"
                  title="github"
                />
              </a>
            </span>
            <span>
              <a href="linkedin.com/in/tushar-bawane-2291a921a" target="_blank">
                <FaLinkedinIn
                  className="w-8 h-8 fill-yellow hover:scale-150"
                  title="linkedin"
                />
              </a>
            </span>
            <span>
              <a href="mailto:23tushar.bawane1996@gmail.com" target="_blank">
                <SiGmail
                  className="w-8 h-8 fill-yellow hover:scale-150"
                  title="gmail"
                />
              </a>
            </span>
          </div>
          <div className=" flex items-center gap-4 flex-wrap">
            <button className="border rounded-full min-w-12 px-5 py-3 border-gray-800 text-gray-400 hover:border-purple hover:bg-pink-300/10 font-semibold text-lg">
              Contact Me
            </button>
            <a
              href="/final-resume.pdf"
              download="/final-resume.pdf"
              className="border flex items-center gap-2 rounded-full min-w-12 px-5 py-3 bg-green text-black border-green text-lg font-semibold"
            >
              Get Resume <MdDownload />
            </a>
          </div>
        </div>
        <div>
          <div className="order-1 lg:order-2 from-[#1b1e27] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#14151a]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="text-purple mr-2 ">const</span>
                  <span className="text-yellow mr-2 ">coder</span>
                  <span className="text-sky-500 mr-2 ">=</span>
                  <span className="text-purple mr-2 ">{"{"}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">name:</span>
                  <span className="text-green">{'"'}</span>
                  <span className="text-green">tushar bawane</span>
                  <span className="text-green">{'"'}</span>
                  <span className="text-white">{","}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">skills:</span>
                  <span className="text-sky-500 mr-1">{"['"}</span>
                  <span className="text-green">react</span>
                  <span className="text-green">{"', '"}</span>
                  <span className="text-green">nextjs</span>
                  <span className="text-green">{"', '"}</span>
                  <span className="text-green">redux</span>
                  <span className="text-green">{"', '"}</span>
                  <span className="text-green">node</span>
                  <span className="text-green">{"', '"}</span>
                  <span className="text-green">tailwind</span>
                  <span className="text-green">{"'"}</span>
                  <span className="text-sky-500 ms-1">{"]"}</span>
                  <span className="text-white">{","}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">hardworking:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-white">{","}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">quickLearning:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-white">{","}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">problemSolver:</span>
                  <span className="text-orange-500">true</span>
                  <span className="text-white">{","}</span>
                </div>
                <div>
                  <span className="text-red-500 mr-1">hireable:</span>
                  <span className="text-purple">function()</span>
                  <span className="text-sky-500">{" { "}</span>
                  <div>
                    <span className="text-purple mr-1">return</span>
                    <span className="text-orange-300">this.</span>
                    <span className="text-red-500 mr-1">hardworking && </span>
                    <span className="text-orange-300">this.</span>
                    <span className="text-red-500 mr-1">problemSolver &&</span>
                    <span className="text-orange-300">this.</span>
                    <span className="text-red-500 mr-1">
                      skills.length {">"} 5
                    </span>
                  </div>
                  <span className="text-sky-500 ms-3">{" }; "}</span>
                </div>
                <span className="text-purple">{" }; "}</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
