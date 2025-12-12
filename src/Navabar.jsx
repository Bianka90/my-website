import bianka from "./assets/bianka_profile.jpeg";
import instagramIcon from "./assets/instagram1.png";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Bianka", href: "#hero", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#portfolio", current: false },
  { name: "Contact", href: "#contact", current: false },
  {
    name: "Lessons",
    href: "https://ep-talent-academy.de/en/coaches/#Bianka%20Halmai",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-stone-950 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-1 focus:outline-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.name === "Lessons" ? "_blank" : undefined}
                        rel={
                          item.name === "Lessons"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile / Instagram */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://www.instagram.com/biankahalmai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative rounded-full p-1 text-gray-400 animate-pulse">
                    <span className="sr-only">View Instagram</span>
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-9 h-9 bg-white rounded-full"
                    />
                  </button>
                </a>

                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="flex rounded-full">
                    <a href="#hero">
                      <img
                        src={bianka}
                        alt="Profile"
                        className="w-8 h-8 rounded-full bg-gray-800"
                      />
                    </a>
                  </Menu.Button>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  target={item.name === "Lessons" ? "_blank" : undefined}
                  rel={
                    item.name === "Lessons" ? "noopener noreferrer" : undefined
                  }
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
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
