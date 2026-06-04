import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";
import bianka2 from "./assets/bianka_profile_bw.jpeg";

export default function About() {
  const sectionRef = useRef(null);

  const [margin, setMargin] = useState("0px 0px -200px 0px");
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () =>
      setMargin(mq.matches ? "0px 0px -50px 0px" : "0px 0px -200px 0px");
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const inView = useInView(sectionRef, margin);

  const anim = (delay) =>
    inView
      ? { animation: `fadeUp 0.8s ease forwards ${delay}s`, opacity: 0 }
      : { opacity: 0 };

  const slideUp = (delay) =>
    inView
      ? { animation: `slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards ${delay}s`, opacity: 0 }
      : { opacity: 0 };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-screen h-screen bg-stone-950 relative overflow-hidden flex"
    >
      {/* ── Left: Image panel (desktop only) ── */}
      <div
        className="hidden md:block relative w-1/2 h-full overflow-hidden"
        style={inView ? { animation: "revealPanel 1s cubic-bezier(0.16,1,0.3,1) forwards 0.2s", opacity: 0 } : { opacity: 0 }}
      >
        <img
          src={bianka2}
          alt="Bianka Halmai portrait"
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
        {/* Right fade into divider */}
        <div className="absolute inset-0 bg-gradient-to-l from-stone-950 to-transparent w-16 right-0 left-auto" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-950 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

        {/* Floating caption bottom-left */}
        <div
          className="absolute bottom-16 left-8 text-left"
          style={anim(0.9)}
        >
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
            Bianka Halmai
          </p>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            Violinist
          </p>
        </div>
      </div>

      {/* Vertical divider between panels */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10 hidden md:block" />

      {/* ── Right: Text panel ── */}
      <div className="relative z-20 flex flex-col justify-between w-full md:w-1/2 px-[clamp(2rem,10vw,8rem)] py-16 md:py-20">

        {/* Top row */}
        <div className="flex items-center justify-between" style={anim(0.1)}>
          <p className="text-white/30 text-xs uppercase tracking-[0.4em]">About</p>
          <p className="text-white/20 text-[10px] tabular-nums tracking-widest">02</p>
        </div>

        {/* Middle */}
        <div>
          <div className="overflow-hidden mb-1">
            <h2
              className="text-[clamp(3rem,7vw,7rem)] font-light text-white leading-[0.9] tracking-tight"
              style={slideUp(0.3)}
            >
              Passionate
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2
              className="text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-tight text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", ...slideUp(0.45) }}
            >
              Violinist.
            </h2>
          </div>

          <div className="w-full h-px bg-white/10 mb-8" style={anim(0.55)} />

          <p
            className="text-white/50 text-sm leading-relaxed max-w-sm mb-10"
            style={anim(0.65)}
          >
            Hi, I'm Bianka — a violinist with a love for music and
            performance. Whether on stage or in the studio, I bring
            emotion and precision to every note, and joy to every student
            I teach.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10" style={anim(0.75)}>
            {[
              { value: "15+", label: "Years" },
              { value: "200+", label: "Shows" },
              { value: "50+", label: "Students" },
            ].map(({ value, label }) => (
              <div key={label} className="border-l border-white/10 pl-4">
                <p className="text-white text-2xl font-light">{value}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div style={anim(0.85)}>
            <a href="#contact">
              <button className="px-6 py-3 bg-white text-stone-950 text-sm font-semibold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-200 cursor-pointer">
                Get in Touch
              </button>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]" style={anim(0.95)}>
          Violinist · Performer · Teacher
        </p>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(55px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealPanel {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}