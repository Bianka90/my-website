import bianka1 from "./assets/bianka_violin.jpeg";
import bianka2 from "./assets/bianka_profile_bw.jpeg";
import blackBg from "./assets/black_bg.jpg";
import blackBgLs from "./assets/black_bg_ls.jpg";
export default function About() {
  return (
    <section className="max-w-screen h-full bg-stone-900 flex flex-col pt-10 px-5 md:px-40 ">
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

      {/* Photos */}
      <div
        id="photos"
        className="relative w-full flex justify-center items-center h-screen  mt-20 md:my-30 lg:my-30"
      >
        {/* Background image */}
        <img
          src={blackBg}
          alt="Photo 1"
          className="absolute top-0 left-1/2 w-2/4 h-110  md:h-140 md:w-100 lg:w-1/2 transform -translate-x-1/2 z-0 xl:-translate-y-20"
        />

        {/* Middle image */}
        <img
          src={bianka1}
          alt="Photo 2"
          className="absolute -translate-y-70 left-2/3 w-50 md:w-70 transform -translate-x-1/2 z-10 lg:w-80 xl:w-120 xl:left-210"
        />

        {/* Top image */}
        <img
          src={bianka2}
          alt="Photo 3"
          className="absolute top-50 left-1/3 w-50 :w-60 md:w-70 transform -translate-x-1/2 z-20 lg:w-80 xl:w-120 xl:top-20"
        />
      </div>
    </section>
  );
}
