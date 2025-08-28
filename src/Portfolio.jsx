import { useState } from "react";
import Card from "./components/Card";
import bianka_kate from "./assets/bianka_kate_front.jpeg";
import bianka_kate2 from "./assets/bianka_kate_side.jpeg";
import bianka from "./assets/bianka_profile.jpeg";
import donau_trio from "./assets/donau_trio.jpeg";
import bianka_w_girls from "./assets/bianka_w_girls.jpeg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Portfolio() {
  const cardsData = [
    {
      id: 0,
      img: bianka_w_girls,
      title: "Bianka & Girls",
      description: "Stinking around the universe!",
    },
    {
      id: 1,
      img: bianka_kate,
      title: "Bianka & Kate",
      description: "Stinking around the universe!",
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

  const prevCard = () => {
    setSlideDirection("left");
    setActiveCard((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setSlideDirection("right");
    setActiveCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const card = cardsData[activeCard]; // only the active card

  return (
    <section className="w-full h-full bg-stone-950 flex flex-col justify-center items-center py-20 px-5 md:px-40">
      {/* text block wrapper */}
      <div className="w-full flex flex-col items-start">
        <h2 className="text-4xl text-white tracking-wide">Portfolio</h2>
        <div className="border-b-4 border-white w-20 my-2"></div>
        <p className="text-white">
          Here are some of my recent performances and projects.
        </p>
      </div>

      {/* centered card wrapper */}
      <div className="w-full flex justify-center mt-8">
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
          slideAnimation={
            slideDirection === "right" ? "slide-in-left" : "slide-in-right"
          }
          arrowRight={
            <ArrowRightIcon
              className="h-6 w-6 text-white cursor-pointer"
              onClick={nextCard}
            />
          }
          arrowLeft={
            <ArrowLeftIcon
              className="h-6 w-6 text-white cursor-pointer"
              onClick={prevCard}
            />
          }
        />
      </div>
    </section>
  );
}
