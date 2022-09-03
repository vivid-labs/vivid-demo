import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

export const HeroHome = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const sheetsURL =
    "https://sheet.best/api/sheets/a0159a76-267d-4f5b-96a4-31c4c153dc9e";

  const EmailMessage = (props: any) => {
    const emailSubmitted = props.emailSubmitted;
    if (emailSubmitted) {
      return (
        <p className="mt-3 text-sm text-grayscale-400">
          {" "}
          We'll keep you posted!{" "}
        </p>
      );
    }
    return (
      <p className="mt-3 text-sm text-grayscale-400">
        {" "}
        Be the first to experience Vivid.{" "}
      </p>
    );
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);

    axios.post(sheetsURL, { email }).then((response) => {
      console.log(response);
    });

    setEmail("");
  };

  return (
    <section className="relative md:h-screen  dark:bg-slate-800 max-h-[72rem]">
      {/* Illustration behind hero content */}
      <div
        className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="justify-center h-full px-8 mx-auto max-w-7xl sm:px-10">
        {/* Hero content */}
        <div className="flex flex-col h-full items-center gap-16 pt-32 pb-12 md:pt-40 md:pb-20 md:flex-row">
          {/* Section header */}
          <div className="items-center md:pb-12 text-center md:text-left md:pb-16">
            <h1 className="text-4xl dark:text-white md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                visually.
              </span>
            </h1>
            <h1 className="text-4xl  dark:text-white md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4">
              Code{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
                faster.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="mb-8 text-xl text-grayscale-600">
                Vivid makes front-end development effortless with our in-browser
                visual editor to modify your code.{" "}
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start">
                {/* CTA form */}
                <form
                  name="googleSheetsSubmit"
                  className="w-full"
                  onSubmit={submitHandler}
                  method="post"
                >
                  <div className="flex flex-col justify-center max-w-xs mx-auto sm:flex-row sm:justify-start sm:max-w-lg lg:mx-0">
                    <input
                      type="email"
                      className="w-full px-4 py-3 mb-2 border rounded-lg appearance-none placeholder-grayscale-500 form-input bg-slate-50 border-slate-200 focus:border-slate-400 sm:mb-0 sm:mr-2 text-slate-500"
                      placeholder="richard.hendricks@piedpiper.com"
                      aria-label="Your email…"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <button
                      onClick={() => setEmailSubmitted(true)}
                      type="submit"
                      className="ml-2 text-white bg-black rounded-lg shadow btn hover:bg-blue-600"
                    >
                      Waitlist
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-3 text-sm text-grayscale-400">Thanks for subscribing!</p> */}
                  <EmailMessage emailSubmitted={emailSubmitted}></EmailMessage>
                </form>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center mb-8 md:max-w-2xl">
            <div className="flex flex-col justify-center">
              <div className="flex p-4 rounded-xl bg-slate-900">
                <Image
                  placeholder="blur"
                  blurDataURL="/images/vivid-screen-lq.png"
                  className="px-8 py-8 mx-auto "
                  src="/images/vivid-screen-2.gif"
                  height="700"
                  width="1200"
                  alt="Vivid demo"
                />
              </div>

              <svg
                className="absolute inset-0 h-auto max-w-full mx-auto md:max-w-none"
                width="768"
                height="432"
                viewBox="0 0 768 432"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    fillOpacity=".04"
                    fill="url(#hero-ill-a)"
                    cx="384"
                    cy="216"
                    r="128"
                  />
                  <circle
                    fillOpacity=".16"
                    fill="url(#hero-ill-b)"
                    cx="384"
                    cy="216"
                    r="96"
                  />
                  <g fillRule="nonzero">
                    <use fill="#000" xlinkHref="#hero-ill-d" />
                    <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                  </g>
                </g>
              </svg>
            </div>
            {/*<button
                className="absolute flex items-center p-4 font-medium transform -translate-y-1/2 bg-white rounded-full shadow-lg top-full group"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 fill-current text-grayscale-400 group-hover:text-blue-600"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>*/}
          </div>

          {/* Modal 
          <Modal
            id="modal"
            ariaLabel="modal-headline"
            show={videoModalOpen}
            handleClose={() => setVideoModalOpen(false)}
          >
            <div className="relative pb-9/16">
              <iframe
                className="absolute w-full h-full"
                src="https://player.vimeo.com/video/174002812"
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>*/}
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
