export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white p-4">
      <div className="container mx-auto grid grid-cols-2 items-center px-4 md:p-0">
        {/* Left side: copyright */}
        <p className="text-sm">
          &copy; 2026 Bianka Halmai. All rights reserved.
        </p>

        {/* Right side: Made by link */}
        <p className="text-sm text-zinc-600 text-right">
            Built by{" "}
            <span className="bg-gradient-to-r from-[#2EE6D6] to-[#8A5CF6] bg-clip-text text-transparent">
              <a href="https://studiow.dev" target="_blank" rel="noopener noreferrer">Studio W</a>
            </span>
          </p>
      </div>
    </footer>
  );
}
