import { useRef } from "react";
import { useInView } from "./useInView";
import bianka1 from "./assets/bianka_violin.jpeg";
import bianka2 from "./assets/bianka_profile_bw.jpeg";
import blackBg from "./assets/black_bg.jpg";
import blackBgLs from "./assets/black_bg_ls.jpg";
export default function About() {
  const img1Ref = useRef();
  const img2Ref = useRef();

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const margin = isMobile ? "0px 0px -50px 0px" : "0px 0px -200px 0px";

  const img1InView = useInView(img1Ref, margin);
  const img2InView = useInView(img2Ref, margin);

  return (
    <section
      id="about"
      className="max-w-screen h-screen bg-stone-900 flex flex-col pt-10 px-5 md:px-40 "
    >
      {/* About Me */}
      <div className=" md:w-full lg:mb-20">
        <div className="flex items-center">
          <h2 className="text-4xl text-white">About me</h2>
          <div className="border-b-4 border-white w-20 ml-5"></div>
        </div>
        <p className="text-white pt-2">
          Hi, I'm Bianka, a passionate violinist with a love for music and
          performance.
        </p>
      </div>

      <div
        id="photos"
        className="relative w-full h-screen flex justify-center items-center mt-20"
      >
        {/* Background image */}
        <img
          src={blackBg}
          alt="Background"
          className="absolute top-[50px] left-[50%] w-[400px] h-[400px] transform -translate-x-1/2 z-0 "
          loading="lazy"
        />

        {/* Middle image */}
        <img
          ref={img1Ref}
          src={bianka1}
          alt="Middle"
          className={`absolute -top-[50px] left-[70%] w-[230px] md:left-[59%] md:w-[22%] md:-top-[100px] transform -translate-x-1/2 z-10 opacity-0 ${
            img1InView ? "slide-in-right" : ""
          }`}
          loading="lazy"
        />

        {/* Top image */}
        <img
          ref={img2Ref}
          src={bianka2}
          alt="Top"
          className={`absolute top-[150px] left-[30%] w-[230px] md:left-[38%] md:w-[22%] md:top-[100px] xl: transform -translate-x-1/2 z-20 opacity-0 ${
            img2InView ? "slide-in-left" : ""
          }`}
          loading="lazy"
        />
      </div>
    </section>
  );
}
