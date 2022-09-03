import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);

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

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
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
                <div className="flex items-center px-5 py-3 font-medium text-grayscale-600 transition duration-150 ease-in-out hover:text-blue-500">
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
                  className="ml-0 sm:ml-3 w-28 sm:w-fit text-grayscale-200 bg-grayscale-900 rounded-lg btn hover:bg-blue-600"
                >
                  <span>Waitlist</span>
                  <svg
                    className="flex-shrink-0 w-3 h-3 ml-2 -mr-1 text-grayscale-400 fill-current"
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
