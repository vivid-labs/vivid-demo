import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Transition } from "../utils/Transition";

export const Features = () => {
  const [tab, setTab] = useState(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current?.children[tab]) {
      const child = tabs.current.children[tab - 1] as HTMLElement;
      tabs.current.style.height = child.offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative bg-grayscale-100 md:h-fit pb-20">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-grayscale-200"></div>
      <div className="absolute left-0 right-0 w-px h-20 p-px m-auto transform -translate-y-1/2 bg-grayscale-200"></div>
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-4xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h2">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                developers.
              </span>
            </h1>
            <p className="text-xl text-grayscale-600">
              Vivid lets you edit the most visual parts of your front-end
              directly in your browser while automatically updating your code,
              so you can focus on writing the business logic that matters
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 md:mt-6">
              {/* Tabs buttons */}
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                  tab !== 1
                    ? "bg-white shadow-md border-grayscale-200 hover:shadow-lg"
                    : "bg-grayscale-200 border-transparent"
                }`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setTab(1);
                }}
              >
                <div>
                  <div className="mb-1 font-bold leading-snug tracking-tight">
                    Test styling and update code from your browser
                  </div>
                  <div className="text-grayscale-600">
                    Iterate faster by cutting out the switch between your IDE
                    and browser.
                  </div>
                </div>
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </a>
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-grayscale-200 hover:shadow-lg"
                      : "bg-grayscale-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Inspect elements while you edit them
                    </div>
                    <div className="text-grayscale-600">
                      Find elements faster with the full power of inspect
                      element and edit immediately.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>

                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-grayscale-200 hover:shadow-lg"
                      : "bg-grayscale-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Just drag to resize and realign components
                    </div>
                    <div className="text-grayscale-600">
                      Customize your components as easily as resizing a window -
                      without any trial and error.
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 ml-3 bg-white rounded-full shadow">
                    <svg
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl mb-8 mx-auto flex flex-col justify-center md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col ">
                    <div className="p-4 rounded-xl bg-slate-900 md:ml-4">
                      <Image
                        className="mx-auto w-full rounded md:max-w-none"
                        src="/images/iterate.gif"
                        height="700"
                        width="1200"
                        alt="iterate"
                      />
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col ">
                    <div className="p-4 rounded-xl bg-slate-900 md:ml-4">
                      <video
                        autoPlay
                        loop
                        muted
                        className="mx-auto w-full rounded md:max-w-none"
                      >
                        <source
                          src="/images/inspect-element.webm"
                          type="video/webm"
                        />
                        <source
                          src="/images/inspect-element.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image
                      className="mx-auto rounded md:max-w-none"
                      src="/images/features-bg.png"
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <img
                      className="absolute left-0 w-full transform md:max-w-none animate-float"
                      src="/images/comingsoon.png"
                      width="500"
                      height="44"
                      alt="Element"
                      style={{
                        top: "30%",
                      }}
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
