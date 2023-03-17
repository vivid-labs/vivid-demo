import axios from "axios";
import { FormEvent, useState } from "react";

export const HeroHome = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const sheetsURL = "INSERT SHEETS.BEST URL HERE"

  const EmailMessage = (props: any) => {
    const emailSubmitted = props.emailSubmitted;
    if (emailSubmitted) {
      return (
        <p className="mt-3 text-sm text-grayscale-40 dark:text-zinc-400">
          {" "}
          We'll keep you posted!{" "}
        </p>
      );
    }
    return (
      <p className="mt-3 text-sm text-grayscale-400 dark:text-zinc-400">
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
    <section className="relative md:h-screen dark:bg-zinc-900 max-h-[72rem]">
      {/* Illustration behind hero content */}
      <div
        className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none dark:invert dark:brightness-90 left-1/2"
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
        <div className="flex flex-col items-center h-full gap-16 pt-32 pb-12 md:pt-40 md:pb-20 md:flex-row justify-center">
          {/* Section header */}
          <div className="items-center text-center md:text-left md:pb-16">
            <h1
              className="text-4xl dark:text-zinc-200 md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                visually.
              </span>
            </h1>
            <h1
              className="text-4xl  dark:text-zinc-200 md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Code{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-teal-400">
                faster.
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-grayscale-600 dark:text-zinc-400"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Vivid makes front-end development effortless with our in-browser
                visual editor to modify your code.{" "}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
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
                      className="w-full px-4 py-3 mb-2 border rounded-lg appearance-none placeholder-grayscale-500 form-input bg-slate-50 dark:bg-zinc-800 dark:border-zinc-600 border-slate-200 focus:border-slate-400 sm:mb-0 sm:mr-2 text-slate-500"
                      placeholder="richard.hendricks@piedpiper.com"
                      aria-label="Your email…"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <button
                      onClick={() => setEmailSubmitted(true)}
                      type="submit"
                      className="text-white bg-black rounded-lg shadow dark:text-zinc-900 dark:bg-zinc-300 sm:ml-2 btn hover:bg-blue-600"
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
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
