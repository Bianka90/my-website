import biankaTeaching from "./assets/bianka_teaching.jpg";

export default function Lessons() {
  return (
    <section
      id="lessons"
      className="w-screen md:h-screen bg-stone-950 text-white overflow-hidden flex flex-col md:flex-row "
    >
      {/* Left — Image panel, full bleed */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img
          src={biankaTeaching}
          alt="Bianka teaching violin"
          className="w-full h-full object-cover object-center"
        />
        {/* Right-edge fade into content side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-950 hidden md:block" />
        {/* Bottom fade for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent md:hidden" />

        {/* Floating label on image */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.4em]">
            One-on-One · Group
          </p>
        </div>
      </div>

      {/* Right — Content */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center px-[clamp(2rem,8vw,6rem)] py-16 md:py-0">

        {/* Vertical rule — same as Hero */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

        {/* Section tag */}
        <p className="text-white/40 text-xs uppercase tracking-[0.4em] mb-6">
          Violin Lessons
        </p>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <h2 className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.9] tracking-tight text-white">
            Learn to
          </h2>
        </div>
        <div className="overflow-hidden mb-8">
          <h2 className="text-[clamp(3rem,7vw,6rem)] font-light leading-[0.9] tracking-tight text-white">
            Play.
            <span
              className="ml-3 text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              Grow.
            </span>
          </h2>
        </div>

        {/* Divider row */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-white/30" />
          <p className="text-white/50 text-xs tracking-[0.25em] uppercase">
            All levels welcome
          </p>
        </div>

        {/* Body text */}
        <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-10">
          Lessons tailored to each student's goals — whether you're just
          starting out or refining your technique. Book private sessions or join
          at the{" "}
          <span className="text-white font-medium">Talent Academy</span>, where
          Bianka teaches as part of their music programme.
        </p>

        {/* Info chips */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["Private 1-on-1", "Talent Academy", "All Ages", "Beginner – Advanced"].map(
            (tag) => (
              <span
                key={tag}
                className="border border-white/15 text-white/50 text-[11px] uppercase tracking-widest px-3 py-1.5"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <a href="#contact">
            <button className="px-6 py-3 bg-white text-stone-950 text-sm font-semibold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-200 cursor-pointer">
              Contact
            </button>
          </a>
          <button className="px-6 py-3 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-colors duration-200 cursor-pointer">
            Enroll Now
          </button>
        </div>
      </div>

      <style>{`
        #lessons .overflow-hidden h2 {
          animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
          opacity: 0;
        }
        #lessons .overflow-hidden:nth-child(1) h2 { animation-delay: 0.1s; }
        #lessons .overflow-hidden:nth-child(2) h2 { animation-delay: 0.25s; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}