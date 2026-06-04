import bianka from "./assets/bianka_profile.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-stone-950 relative overflow-hidden mb-50"
    >
      {/* Full-bleed background image with gradient mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={bianka}
          alt="Bianka Halmai, professional violinist and teacher"
          loading="eager"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark gradient — heavier on left, fades right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-950/10" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
      </div>

      {/* Decorative vertical rule */}
      <div
        className="absolute left-[clamp(1.25rem,8vw,6rem)] top-0 bottom-0 w-px bg-white/10 z-10"
        style={{ animation: "expandDown 1.2s ease forwards 0.2s", transformOrigin: "top", transform: "scaleY(0)" }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end md:justify-center px-[clamp(2rem,10vw,8rem)] pb-16 md:pb-0">

        {/* Label */}
        <p
          className="text-white/50 text-xs uppercase tracking-[0.4em] mb-4 md:mb-6"
          style={{ animation: "fadeUp 0.8s ease forwards 0.4s", opacity: 0 }}
        >
          Violinist &amp; Teacher
        </p>

        {/* Name — massive, stacked */}
        <div className="overflow-hidden">
          <h1
            className="text-[clamp(3.5rem,12vw,10rem)] font-light text-white leading-[0.9] tracking-tight slide-in-left"
            style={{ animation: "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards 0.5s", opacity: 0 }}
          >
            Bianka
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className="text-[clamp(3.5rem,12vw,10rem)] font-light text-white leading-[0.9] tracking-tight"
            style={{ animation: "slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards 0.65s", opacity: 0 }}
          >
           <span
              className=" text-transparent md:inline-block"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
            >Halmai
            </span>
          </h1>
        </div>

        {/* Divider + tagline row */}
        <div
          className="flex items-center gap-5 mt-6 md:mt-8"
          style={{ animation: "fadeUp 0.8s ease forwards 0.9s", opacity: 0 }}
        >
          <div className="w-10 h-px bg-white/40" />
          <p className="text-white/60 text-sm tracking-[0.25em] uppercase">
            Classical · Contemporary
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex gap-3 mt-8 md:mt-10"
          style={{ animation: "fadeUp 0.8s ease forwards 1.1s", opacity: 0 }}
        >
          <a href="#contact">
            <button className="px-6 py-3 bg-white text-stone-950 text-sm font-semibold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-200 cursor-pointer">
              Contact
            </button>
          </a>
          <a href="#portfolio">
            <button className="px-6 py-3 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              Portfolio
            </button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-12 z-20 flex flex-col items-center gap-2 text-white/30"
        style={{ animation: "fadeUp 0.8s ease forwards 1.4s", opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center translate-x-3">Scroll</span>
        <div className="w-px h-12 bg-white/20 overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/60" style={{ animation: "scrollLine 2s ease-in-out infinite 1.6s" }} />
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandDown {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}