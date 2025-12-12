import { useState, useEffect } from "react";
import Card from "./components/Card";
import bianka_kate from "./assets/bianka_kate_front.jpeg";
import bianka_kate2 from "./assets/bianka_kate_side.jpeg";
import bianka from "./assets/bianka_profile.jpeg";
import donau_trio from "./assets/donau_trio.jpeg";
import bianka_w_girls from "./assets/bianka_w_girls.jpeg";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";

export default function Portfolio() {
  const cardsData = [
    {
      id: 0,
      img: bianka_w_girls,
      title: "Bianka & Girls",
      description: "Stinking around the universe!",
      url: "https://www.instagram.com/p/DMiZ1VDoXi0/",
    },
    {
      id: 1,
      img: bianka_kate,
      title: "Bianka & Kate",
      description: "Stinking around the universe!",
      url: "https://www.instagram.com/p/DEnd3CCojOL/",
    },
    {
      id: 2,
      img: bianka_kate2,
      title: "Bianka & Kate Side",
      description: "Stinking around the universe!",
    },
    {
      id: 3,
      img: donau_trio,
      title: "Donau Trio",
      description: "The Donau Trio, a captivating musical ensemble.",
    },
    {
      id: 4,
      img: bianka,
      title: "Bianka Profile",
      description: "Stinking around the universe!",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [prevCardIndex, setPrevCardIndex] = useState(null);

  const prevCard = () => {
    setSlideDirection("left");
    setPrevCardIndex(activeCard);
    setActiveCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setSlideDirection("right");
    setPrevCardIndex(activeCard);
    setActiveCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const card = cardsData[activeCard];

  // remove outgoing card after animation
  useEffect(() => {
    if (prevCardIndex !== null) {
      const timer = setTimeout(() => setPrevCardIndex(null), 500); // matches CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [prevCardIndex]);

  return (
    <section
      id="portfolio"
      className="w-screen h-screen bg-stone-950 flex flex-col justify-center items-center  px-5 md:px-40"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-start lg:pb-10">
        <h2 className="text-4xl text-white tracking-wide">Portfolio</h2>
        <div className="border-b-4 border-white w-20 my-2"></div>
        <p className="text-white ">
          Here are some of my recent performances and projects.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full relative h-3/4 max-w-4xl overflow-hidden flex items-center justify-center">
        {prevCardIndex !== null && (
          <Card
            key={cardsData[prevCardIndex].id}
            img={cardsData[prevCardIndex].img}
            title={cardsData[prevCardIndex].title}
            description={cardsData[prevCardIndex].description}
            url={cardsData[prevCardIndex].url}
            slideAnimation={
              slideDirection === "right" ? "slide-out-right" : "slide-out-left"
            }
            className="absolute inset-0"
          />
        )}
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
          url={card.url}
          slideAnimation={
            slideDirection === "right" ? "slide-in-left" : "slide-in-right"
          }
          className="absolute inset-0"
        />
        <PlayIcon
          className="playIcon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
        h-10 w-10 text-stone-50 opacity-0 group-hover:opacity-90 transition-opacity duration-400"
        />
        {/* Left Arrow */}
        <button
          onClick={prevCard}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full hover:bg-black/70"
        >
          <ArrowLeftIcon className="cursor-pointer h-6 w-6 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextCard}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 rounded-full hover:bg-black/70"
        >
          <ArrowRightIcon className="cursor-pointer h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
}
