import axios from "axios";
import { FormEvent, useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sheetsURL =
    "https://sheet.best/api/sheets/a0159a76-267d-4f5b-96a4-31c4c153dc9e";

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);

    axios.post(sheetsURL, { email }).then((response) => {
      console.log(response);
    });

    setEmail("");
  };
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
      <p className="mt-3 text-sm text-grayscale-400 hidden">
        {" "}
        We'll keep you posted!{" "}
      </p>
    );
  };
  return (
    <section className="bg-grayscale-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative px-8 py-10 overflow-hidden bg-grayscale-900 rounded shadow-2xl md:py-16 md:px-12">
            {/* Background illustration */}
            <div
              className="absolute bottom-0 right-0 hidden pointer-events-none lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col items-center justify-between lg:flex-row">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="mb-2 text-white h3">Save your spot today</h3>
                <p className="mb-6 text-lg text-grayscale-300">
                  By joining our waitlist, you'll be the first to see our
                  product. We'd love to learn from you along the way!
                </p>

                {/* CTA form */}
                <form
                  className="w-full lg:w-auto"
                  onSubmit={submitHandler}
                  name="googleSheetsSubmit"
                  method="post"
                >
                  <div className="flex flex-col justify-center max-w-xs mx-auto sm:flex-row sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="w-full px-4 py-3 mb-2 text-white placeholder-grayscale-500 bg-grayscale-800 border border-grayscale-700 rounded-lg appearance-none form-input focus:border-grayscale-600 sm:mb-0 sm:mr-2"
                      placeholder="erlich.bachman@aviato.com"
                      aria-label="Your email…"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <button
                      className="text-white bg-blue-600 rounded-lg shadow btn hover:bg-blue-700"
                      type="submit"
                      onClick={() => setEmailSubmitted(true)}
                    >
                      Waitlist
                    </button>
                  </div>
                  {/* Success message */}
                  <EmailMessage emailSubmitted={emailSubmitted}></EmailMessage>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
