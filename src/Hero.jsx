import bianka from "./assets/bianka_profile.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-full bg-stone-950 flex flex-col md:flex-row overflow-x-hidden"
    >
      {/* Left / Image */}
      <div className="w-full md:w-1/3 relative flex justify-center items-center slide-in-left">
        <img
          src={bianka}
          alt="Bianka Halmai, violinist and teacher"
          className="object-contain  max-w-screen max-h-screen md:max-w-full md:max-h-full"
        />

        {/* Buttons on small screens */}
        <div className="flex md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4">
          <button className="px-4 py-2 bg-white text-stone-950 font-bold rounded cursor-pointer">
            Contact
          </button>
          <button className=" px-4 py-2 bg-white text-stone-950 font-bold rounded cursor-pointer">
            Portfolio
          </button>
        </div>

        {/* Headline on small screens */}
        <h1
          id="hero-name"
          className="absolute md:hidden bottom-32 text-5xl font-medium tracking-widest text-white text-center drop-shadow-lg slide-in-right p-2"
        >
          Bianka Halmai
        </h1>
        <p className="absolute md:hidden bottom-27 text-white text-md tracking-widest drop-shadow-2xl slide-in-left">
          Hi, I'm Bianka, a Violinist
        </p>
      </div>

      {/* Right / Headline + Buttons on md+ screens */}
      <div className="hidden md:flex w-2/3 justify-center items-center flex-col space-y-8">
        <h1
          id="hero-name-lg"
          className="text-6xl p-2 lg:text-8xl font-medium tracking-wider text-white text-center slide-in-right"
        >
          Bianka Halmai
        </h1>
        <p className="text-white text-lg tracking-widest slide-in-left">
          Hi, I'm Bianka, a Violinist
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-stone-950 font-bold rounded cursor-pointer">
            <span>Contact</span>
          </button>
          <button className="px-4 py-2 bg-white text-stone-950 font-bold rounded cursor-pointer">
            Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
