import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = ({ isDarkMode, toggle }) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    const sectionScrollHandler = () => {
      window.pageYOffset > window.innerHeight
        ? setNextSection(true)
        : setNextSection(false);
    };
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", sectionScrollHandler);
    return function cleanup() {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("scroll", sectionScrollHandler);
    };
  }, [top, nextSection]);

  // Cleans up stale dark mode
  useEffect(() => setReloaded(true), []);

  const DarkModeButton = () => (
    <button
      type="button"
      onClick={toggle}
      className={`text-zinc-500 ${
        reloaded ? "" : "hidden"
      } dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg text-sm p-2.5`}
    >
      <svg
        id="theme-toggle-dark-icon"
        className={`w-5 h-5 ${isDarkMode ? "" : "hidden"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
      <svg
        className={`w-5 h-5 ${!isDarkMode ? "" : "hidden"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="px-5 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex flex-row items-center flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="w-10 h-10"
                src="/images/favicon.png"
                alt="Vivid logo"
                height="40"
                width="40"
              ></Image>
            </Link>
            <h3 className="h3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Vivid
              </span>
            </h3>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex items-center justify-end flex-grow">
              {" "}
              <li>
                <DarkModeButton />
              </li>
              <li>
                <div className="flex items-center px-5 py-3 font-medium transition duration-150 ease-in-out text-grayscale-600 dark:text-zinc-300 hover:text-blue-500">
                  <Link href="https://docs.vivid.lol">Docs</Link>
                </div>
              </li>{" "}
              <li
                className={`transition duration-100 ${
                  !nextSection && "hidden"
                }`}
              >
                <button
                  onClick={goToEmail}
                  className="ml-0 rounded-lg sm:ml-3 w-28 sm:w-fit text-grayscale-200 bg-grayscale-900 dark:text-zinc-900 dark:bg-zinc-300 btn hover:bg-blue-600"
                >
                  <span>Waitlist</span>
                  <svg
                    className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 fill-current text-grayscale-400 dark:text-zinc-800"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const goToEmail = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Built with Vivid ⚡️
