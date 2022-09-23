import axios from "axios";
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
        className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-10"
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
        <div className="flex flex-col items-center h-full gap-16 pt-32 pb-12 md:pt-40 md:pb-20 md:flex-row">
          {/* Section header */}
          <div className="items-center text-center md:pb-12 md:text-left md:pb-16">
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
              <p
                className="mb-8 text-xl text-grayscale-600"
                data-aos-delay="150"
              >
                Vivid makes front-end development effortless with our in-browser
                visual editor to modify your code.{" "}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-start"
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
                      className="text-white bg-black rounded-lg shadow sm:ml-2 btn hover:bg-blue-600"
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
          <div
            className="relative flex flex-col justify-center mb-8 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.4)] md:max-w-2xl rounded-xl"
            data-aos-delay="450"
          >
            <img src="images/mac-bar.svg" alt="Mac window bar" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full mx-auto rounded md:max-w-none"
            >
              <source src="/images/total.webm" type="video/webm" />
              <source src="/images/total.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
