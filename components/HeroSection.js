import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

// import lottie from "lottie-web";
// import animation from "../public/hero.json";

const navigation = [
  { name: "Github", href: "https://github.com/muradusa" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/muradcholukov/" },
  { name: "Instagram", href: "https://www.instagram.com/murad_webdev/" },
  { name: "Twitter", href: "https://twitter.com/muradusa" },
];

export default function Example() {
  // const heroAnimation = lottie.loadAnimation({
  //   // container: document.querySelector("#hero-animation"),
  //   animationData: animation,
  //   //     loop: true, // boolean
  //   // autoplay: true, // boolean
  // });

  return (
    <Popover className="relative bg-white overflow-hidden max-w-7xl mx-auto">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="inline-block h-16 w-16 rounded-full"
                        src="/mugshot.png"
                        alt=""
                      />

                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        target="_blank"
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      // offset={1}
                      duration={500}
                    >
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Projects
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="inline-block h-14 w-14 rounded-full"
                          src="mugshot.png"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">I'm Murad Cholukov </span>{" "}
                    <span className="block text-indigo-600 xl:inline">
                      full-stack developer
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Coding and learning is my passion! I'm driven by the desire
                    to create solutions for the society. I believe I can be an
                    asset in a multitude of roles throughout any organization.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        download
                        href="/Murad_Cholukov_resume.pdf"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Resume
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        // offset={-100}
                        duration={500}
                      >
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                          Contact
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-6">
            {/* <div
              className="h-56 w-full object-fit sm:h-72 md:h-80 lg:h-5/6 lg:pl-28"
              id="hero-animation"
            >
              {heroAnimation}
            </div> */}

            <img
              className="h-56 w-full object-fit sm:h-72 md:h-80 lg:h-5/6 lg:pl-28"
              src="/hero1.svg"
            />
          </div>
        </>
      )}
    </Popover>
  );
}
