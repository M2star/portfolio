import Image from "next/image";
const About = () => {
  return (
    <section id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-blue w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-blue"></span>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        <div>
          <h2 className="text-purple text-xl font-semibold mb-3">Who I Am ?</h2>
          <p className="text-base ">
            In the vast digital realm, I am Tushar Bawane, a web developer and
            visionary. With a blend of technical prowess and creative ingenuity,
            I craft immersive digital experiences. My journey is marked by an
            unyielding commitment to innovation and excellence. Each project is
            a canvas for pushing the boundaries of possibility. Fueled by
            curiosity and passion, I navigate the digital landscape with
            audacity. From dynamic web applications to elegant user interfaces,
            I shape the future one line of code at a time. Empathy guides my
            interactions, integrity anchors my work. I am not just coding; I am
            sculpting the digital world. With each keystroke, I strive to
            inspire and leave a lasting legacy.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-50 ">
            <Image
              src="/ha"
              alt="image"
              width={250}
              height={150}
              className="object-contain w-full rounded-md shadow-lg scale-100 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
