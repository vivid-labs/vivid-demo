import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className=" bg-grayscale-100 relative">
      {/* Illustration behind content */}
      {/* <div
        className="absolute top-0 -mb-32 transform -translate-x-1/2 pointer-events-none left-1/2"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
    </svg> 
      </div>*/}
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl h-3 pb-12 mx-auto text-center md:pb-16">
            <h2 className="mb-4 h2">Loved by developers</h2>
            <p className="text-xl text-grayscale-600">
              {" "}
              Styling your web app has never been easier.{" "}
            </p>
          </div>

          {/* Items */}
          {/* Testimonials */}
          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3 md:gap-6">
            {/* Testimonial 1*/}
            <div className="max-w-3xl w-full mx-auto mt-20">
              <div className="relative flex items-center bg-white border-2 border-grayscale-200 rounded">
                <div className="px-12 w-full py-8 pt-20 mx-4 text-center md:mx-0">
                  <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                    <svg
                      className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-blue-500 fill-current"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                    <Image
                      className="relative rounded-full"
                      src="/images/zahid.png"
                      width="96"
                      height="96"
                      alt="Zahid"
                    />
                  </div>
                  <div className="justify-center">
                    <blockquote className="mb-4 text-xl font-medium">
                      “This is witchcraft. How did you do this?“
                    </blockquote>
                    <cite className="block mb-1 text-lg not-italic font-bold">
                      Zahid Mahmood
                    </cite>
                    <div className="text-grayscale-600">
                      <span>CTO & Co-Founder</span>{" "}
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://www.linkedin.com/in/zaarheed/"
                      >
                        @Buskana
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="max-w-3xl w-full mx-auto mt-20">
              <div className="relative flex items-center bg-white border-2 border-grayscale-200 rounded">
                <div className="px-12 w-full py-8 pt-20 mx-4 text-center md:mx-0">
                  <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                    <svg
                      className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-blue-500 fill-current"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                    <Image
                      className="relative rounded-full"
                      src="/images/gavin.png"
                      width="96"
                      height="96"
                      alt="Gavin"
                    />
                  </div>
                  <div className="justify-center">
                    <blockquote className="mb-4 text-xl font-medium">
                      “I could've beaten Pied Piper with this.“
                    </blockquote>
                    <cite className="block mb-1 text-lg not-italic font-bold">
                      Gavin Belson
                    </cite>
                    <div className="text-grayscale-600">
                      <span>CEO</span>{" "}
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://silicon-valley.fandom.com/wiki/Hooli"
                      >
                        @Hooli
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-3xl w-full mx-auto mt-20">
              <div className="relative flex items-center bg-white border-2 border-grayscale-200 rounded">
                <div className="px-12 w-full py-8 pt-20 mx-4 text-center md:mx-0">
                  <div className="absolute top-0 -mt-8 transform -translate-x-1/2 left-1/2">
                    <svg
                      className="absolute top-0 right-0 w-16 h-16 -mt-3 -mr-8 text-blue-500 fill-current"
                      viewBox="0 0 64 64"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                    </svg>
                    <Image
                      className="relative rounded-full"
                      src="/images/tejal.png"
                      width="96"
                      height="96"
                      alt="Tejal"
                    />
                  </div>
                  <div className="justify-center">
                    <blockquote className="mb-4 text-xl font-medium">
                      “This is wild - it's going to save me hours of development
                      time“
                    </blockquote>
                    <cite className="block mb-1 text-lg not-italic font-bold">
                      Tejal Patwardhan
                    </cite>
                    <div className="text-grayscale-600">
                      <span>Founder</span>{" "}
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://martingalelabs.com/"
                      >
                        @Martingale
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Built with Vivid ⚡️
