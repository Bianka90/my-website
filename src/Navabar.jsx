import bianka from "./assets/bianka_profile.jpeg";
import instagramIcon from "./assets/instagram1.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  // { name: "Bianka", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
  {
    name: "Lessons",
    href: "https://ep-talent-academy.de/en/coaches/#Bianka%20Halmai",
    external: true,
  },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          {/* Main bar */}
          <div className="relative flex h-16 items-center justify-between px-[clamp(2rem,10vw,8rem)] bg-stone-950/80 backdrop-blur-md border-b border-white/5">

            {/* Vertical rule accent */}
            <div className="absolute left-[clamp(1.25rem,8vw,6rem)] top-0 bottom-0 w-px -ml-[15px] bg-white/10" />

            {/* Left — logo/name */}
            
              <a href="#hero"
              className="text-white text-sm font-light tracking-[0.3em] uppercase hover:text-white/70 transition-colors duration-200"
            >
              Bianka Halmai
            </a>

            {/* Center — desktop nav */}
            <div className="hidden sm:flex items-center gap-8">
              {navigation.map((item) => (
                
                  <a key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-white/40 text-xs uppercase tracking-[0.25em] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right — instagram + avatar */}
            <div className="flex items-center gap-4">
              
                <a href="https://www.instagram.com/biankahalmai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-5 h-5 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-200"
                />
              </a>

              <a href="#hero">
                <img
                  src={bianka}
                  alt="Profile"
                  className="w-7 h-7 rounded-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-200 ring-1 ring-white/20"
                />
              </a>

              {/* Mobile burger */}
              <Disclosure.Button className="sm:hidden flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <Disclosure.Panel className="sm:hidden bg-stone-950/95 backdrop-blur-md border-b border-white/5">
            <div className="flex flex-col px-[clamp(2rem,10vw,8rem)] py-6 gap-5">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-white/40 text-xs uppercase tracking-[0.3em] hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}