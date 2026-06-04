import { useState, useEffect } from "react";
import bianka_kate from "./assets/bianka_kate_front.jpeg";
import bianka_kate2 from "./assets/bianka_kate_side.jpeg";
import bianka from "./assets/bianka_profile.jpeg";
import donau_trio from "./assets/donau_trio.jpeg";
import bianka_w_girls from "./assets/bianka_w_girls.jpeg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const cardsData = [
  {
    id: 0,
    img: bianka_w_girls,
    title: "Bianka & Girls",
    description: "Stinking around the universe!",
    url: "https://www.instagram.com/p/DMiZ1VDoXi0/",
    label: "Ensemble",
  },
  {
    id: 1,
    img: bianka_kate,
    title: "Bianka & Kate",
    description: "Stinking around the universe!",
    url: "https://www.instagram.com/p/DEnd3CCojOL/",
    label: "Duet",
  },
  {
    id: 2,
    img: bianka_kate2,
    title: "Bianka & Kate Side",
    description: "Stinking around the universe!",
    label: "Duet",
  },
  {
    id: 3,
    img: donau_trio,
    title: "Donau Trio",
    description: "A captivating musical ensemble.",
    label: "Trio",
  },
  {
    id: 4,
    img: bianka,
    title: "Bianka Profile",
    description: "Stinking around the universe!",
    label: "Solo",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState("right");
  const [animating, setAnimating] = useState(false);

  const go = (next, direction) => {
    if (animating) return;
    setDir(direction);
    setPrev(active);
    setActive(next);
    setAnimating(true);
  };

  const prevCard = () =>
    go(active === 0 ? cardsData.length - 1 : active - 1, "left");
  const nextCard = () =>
    go(active === cardsData.length - 1 ? 0 : active + 1, "right");

  useEffect(() => {
    if (prev !== null) {
      const t = setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [prev]);

  const card = cardsData[active];
  const prevData = prev !== null ? cardsData[prev] : null;

  return (
    <section
      id="portfolio"
      className="w-screen h-screen bg-stone-950 relative overflow-hidden flex"
    >
      {/* Vertical rule */}
      <div className="absolute left-[clamp(1.25rem,8vw,6rem)] top-0 bottom-0 w-px bg-white/10 z-10" />

      {/* ── MOBILE: full-bleed background images ── */}
      <div className="md:hidden absolute inset-0 z-0">
        {prevData && (
          <div
            key={`mob-prev-${prevData.id}`}
            className="absolute inset-0"
            style={{
              animation: `${dir === "right" ? "bgExitLeft" : "bgExitRight"} 0.6s cubic-bezier(0.16,1,0.3,1) forwards`,
            }}
          >
            <img src={prevData.img} alt={prevData.title} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
          </div>
        )}
        <div
          key={`mob-${card.id}`}
          className="absolute inset-0"
          style={{
            animation: `${dir === "right" ? "bgEnterRight" : "bgEnterLeft"} 0.6s cubic-bezier(0.16,1,0.3,1) forwards`,
          }}
        >
          <img src={card.img} alt={card.title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Left: Content (full width mobile, half desktop) ── */}
      <div className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-between px-[clamp(2rem,10vw,8rem)] py-16 md:py-20">

        {/* Top */}
        <div className="flex items-center justify-between">
          <p className="text-white/30 text-xs uppercase tracking-[0.4em]">Portfolio</p>
          <p className="text-white/20 text-[10px] tabular-nums tracking-widest">03</p>
        </div>

        {/* Middle */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-white text-sm tabular-nums">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div className="relative h-px w-24 bg-white/20">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                style={{ width: `${((active + 1) / cardsData.length) * 100}%` }}
              />
            </div>
            <span className="text-white/30 text-sm tabular-nums">
              {String(cardsData.length).padStart(2, "0")}
            </span>
          </div>

          <p
            key={`label-${card.id}`}
            className="text-white/40 text-xs uppercase tracking-[0.4em] mb-3"
            style={{ animation: "fadeUp 0.5s ease forwards" }}
          >
            {card.label}
          </p>

          <div className="overflow-hidden mb-4">
            <h2
              key={`title-${card.id}`}
              className="text-[clamp(2.5rem,5vw,6rem)] font-light text-white leading-[0.9] tracking-tight"
              style={{ animation: "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              {card.title}
            </h2>
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          <p
            key={`desc-${card.id}`}
            className="text-white/40 text-sm leading-relaxed max-w-xs mb-10"
            style={{ animation: "fadeUp 0.6s ease forwards 0.1s", opacity: 0 }}
          >
            {card.description}
          </p>

          <div className="flex items-center gap-4">
            {card.url ? (
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-white text-stone-950 text-sm font-semibold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-200 cursor-pointer">
                  View
                </button>
              </a>
            ) : (
              <button disabled className="px-6 py-3 border border-white/20 text-white/30 text-sm font-semibold tracking-widest uppercase cursor-not-allowed">
                View
              </button>
            )}

            <div className="flex gap-2 ml-auto">
              <button onClick={prevCard} className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                <ArrowLeftIcon className="h-4 w-4" />
              </button>
              <button onClick={nextCard} className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          Violinist · Performer · Teacher
        </p>
      </div>

      {/* Center divider */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10" />

      {/* ── Right: Image panel (desktop only) ── */}
      <div className="hidden md:block relative w-1/2 h-full overflow-hidden">
        {prevData && (
          <div
            key={`img-prev-${prevData.id}`}
            className="absolute inset-0"
            style={{
              animation: `${dir === "right" ? "imgExitLeft" : "imgExitRight"} 0.6s cubic-bezier(0.16,1,0.3,1) forwards`,
            }}
          >
            <img src={prevData.img} alt={prevData.title} className="w-full h-full object-cover object-center" />
          </div>
        )}
        <div
          key={`img-${card.id}`}
          className="absolute inset-0"
          style={{
            animation: `${dir === "right" ? "imgEnterRight" : "imgEnterLeft"} 0.6s cubic-bezier(0.16,1,0.3,1) forwards`,
          }}
        >
          <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent w-16" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
        </div>

        {/* Dot nav */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {cardsData.map((c, i) => (
            <button key={c.id} onClick={() => go(i, i > active ? "right" : "left")} className="cursor-pointer">
              <div className={`rounded-full transition-all duration-300 ${i === active ? "w-1.5 h-6 bg-white" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"}`} />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bgEnterRight {
          from { opacity: 0; transform: scale(1.04) translateX(2%); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes bgEnterLeft {
          from { opacity: 0; transform: scale(1.04) translateX(-2%); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes bgExitLeft {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to   { opacity: 0; transform: scale(0.97) translateX(-2%); }
        }
        @keyframes bgExitRight {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to   { opacity: 0; transform: scale(0.97) translateX(2%); }
        }
        @keyframes imgEnterRight {
          from { opacity: 0; transform: scale(1.04) translateX(3%); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes imgEnterLeft {
          from { opacity: 0; transform: scale(1.04) translateX(-3%); }
          to   { opacity: 1; transform: scale(1) translateX(0); }
        }
        @keyframes imgExitLeft {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to   { opacity: 0; transform: scale(0.97) translateX(-3%); }
        }
        @keyframes imgExitRight {
          from { opacity: 1; transform: scale(1) translateX(0); }
          to   { opacity: 0; transform: scale(0.97) translateX(3%); }
        }
      `}</style>
    </section>
  );
}