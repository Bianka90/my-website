import instagramIcon from "./assets/instagram1.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-screen min-h-screen bg-stone-950 relative overflow-hidden flex flex-col justify-between px-[clamp(2rem,10vw,8rem)] py-16 md:py-20"
    >
      {/* Vertical rule */}
      <div className="absolute left-[clamp(1.25rem,8vw,6rem)] top-0 bottom-0 w-px bg-white/10 z-10" />

      {/* Top row */}
      <div className="relative z-20 flex items-center justify-between w-full">
        <p className="text-white/30 text-xs uppercase tracking-[0.4em]">Contact</p>
        <p className="text-white/20 text-[10px] tabular-nums tracking-widest">04</p>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end gap-16 md:gap-24 mt-16 md:mt-0">

        {/* Left — headline + info */}
        <div className="md:w-1/2 flex flex-col justify-end">

          <div className="overflow-hidden mb-1">
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-light text-white leading-[0.9] tracking-tight">
              Let's
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2
              className="text-[clamp(3rem,7vw,7rem)] font-light leading-[0.9] tracking-tight text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              Connect.
            </h2>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-white/30" />
            <p className="text-white/50 text-xs tracking-[0.25em] uppercase">
              Always open to new projects
            </p>
          </div>

          <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-12">
            Have a project in mind, want to collaborate, or interested in
            lessons? Reach out — I'd love to hear from you.
          </p>

          {/* Contact details */}
          <div className="space-y-5">
            
              <a href="mailto:info@biankahalmai.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-8 h-px bg-white/20 group-hover:bg-white/50 transition-colors duration-200" />
              <span className="text-white/50 text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                info@biankahalmai.com
              </span>
            </a>

            
             <a href="https://www.biankahalmai.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-8 h-px bg-white/20 group-hover:bg-white/50 transition-colors duration-200" />
              <span className="text-white/50 text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                www.biankahalmai.com
              </span>
            </a>

            
              <a href="https://www.instagram.com/biankahalmai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-8 h-px bg-white/20 group-hover:bg-white/50 transition-colors duration-200" />
              <span className="flex items-center gap-2 text-white/50 text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                <img src={instagramIcon} alt="" className="w-4 h-4 rounded-full bg-white" />
                biankahalmai
              </span>
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px self-stretch bg-white/10" />

        {/* Right — form */}
        <form className="md:w-1/2 flex flex-col gap-8">
          <div className="relative border-b border-white/15 focus-within:border-white/50 transition-colors duration-200">
            <label className="block text-white/30 text-[10px] uppercase tracking-[0.3em] mb-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent text-white text-sm placeholder-white/20 pb-3 focus:outline-none"
            />
          </div>

          <div className="relative border-b border-white/15 focus-within:border-white/50 transition-colors duration-200">
            <label className="block text-white/30 text-[10px] uppercase tracking-[0.3em] mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent text-white text-sm placeholder-white/20 pb-3 focus:outline-none"
            />
          </div>

          <div className="relative border-b border-white/15 focus-within:border-white/50 transition-colors duration-200">
            <label className="block text-white/30 text-[10px] uppercase tracking-[0.3em] mb-3">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-transparent text-white text-sm placeholder-white/20 pb-3 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start px-8 py-3 bg-white text-stone-950 text-sm font-semibold tracking-widest uppercase hover:bg-stone-200 transition-colors duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Bottom row */}
      <div className="relative z-20 flex items-center justify-between mt-16 md:mt-0">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          Bianka Halmai · Violinist
        </p>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}