import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";
import bianka1 from "./assets/bianka_violin.jpeg";
import bianka2 from "./assets/bianka_profile_bw.jpeg";
import blackBg from "./assets/black_bg.jpg";

export default function About() {
  const photosRef = useRef(null);

  const [margin, setMargin] = useState("0px 0px -200px 0px");
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () =>
      setMargin(mq.matches ? "0px 0px -50px 0px" : "0px 0px -200px 0px");
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const inView = useInView(photosRef, margin);

  return (
    <section
      id="about"
      className="max-w-screen min-h-screen bg-stone-900 flex flex-col pt-10 px-5 md:px-40"
    >
      <div className="md:w-full lg:mb-20">
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
        ref={photosRef}
        id="photos"
        className="relative w-full min-h-screen flex justify-center items-center mt-20"
        style={{ perspective: "1000px" }}
      >
        <img
          src={blackBg}
          alt="Background"
          className="absolute top-[50px] left-1/2 w-[400px] h-[400px] -translate-x-1/2 z-0"
          loading="lazy"
        />

        {/* Right image */}
        <div
          className={`absolute -top-[50px] left-[70%] w-[230px] md:left-[59%] md:w-[22%] md:-top-[100px] -translate-x-1/2 z-10 ${
            inView ? "slide-in-right" : "hidden-before"
          }`}
        >
          <img src={bianka1} alt="Bianka playing violin" loading="lazy" />
        </div>

        {/* Left image */}
        <div
          className={`absolute top-[150px] left-[30%] w-[230px] md:left-[38%] md:w-[22%] md:top-[100px] -translate-x-1/2 z-20 ${
            inView ? "slide-in-left" : "hidden-before"
          }`}
        >
          <img
            src={bianka2}
            alt="Bianka portrait black and white"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
