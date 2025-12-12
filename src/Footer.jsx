export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white py-8">
      <div className="container mx-auto grid grid-cols-2 items-center px-4 md:p-0">
        {/* Left side: copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bianka Halmai. All rights reserved.
        </p>

        {/* Right side: Made by link */}
        <p className="text-sm text-right">
          Made by{" "}
          <a
            href="https://your-website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            William
          </a>
        </p>
      </div>
    </footer>
  );
}
