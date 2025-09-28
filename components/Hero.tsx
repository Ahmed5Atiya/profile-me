import { FaLocationArrow } from "react-icons/fa";
import { BackgroundLines } from "./ui/background-lines";
import MagicButton from "./ui/MagicButton";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <BackgroundLines className="flex  items-center justify-center w-full flex-col  mt-28 pt-16 pb-7">
      <h2 className="uppercase max-w-80 text-center text-blue-100 tracking-widest">
        Dynamic web magic with next js
      </h2>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative  font-bold tracking-tight">
        Transforming Concept into <br />{" "}
        <h2 className="text-purple md:mt-6 sm:mt-2">
          Seamless User Experiences
        </h2>
      </h2>
      <p className="max-w-xl tracking-widest  mx-auto text-xl md:text-3xl text-purple capitalize  text-center">
        Hi I`m Ahmed Khalid A Software Engineer base in Egypt
      </p>
      <a href="#about" className="z-30 cursor-pointer">
        <MagicButton
          title="Tell Me More"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </BackgroundLines>
  );
});

Hero.displayName = "Hero";
export default Hero;
