import Link from "next/link";

export const FooterLinks = () => {
  {
    /* Top area: Blocks */
  }
  <div className="grid gap-8 py-8 border-t border-grayscale-200 sm:grid-cols-12 md:py-12">
    {/* 1st block */}
    <div className="sm:col-span-12 lg:col-span-3">
      <div className="mb-2">
        {/* Logo */}
        <Link href="/" className="block" aria-label="Cruip">
          <img className="w-10 h-10" src="/src/images/favicon.png"></img>
        </Link>
      </div>
      <div className="text-sm text-grayscale-600"></div>
    </div>

    {/* 2nd block */}
    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 className="mb-2 font-medium text-grayscale-800">Products</h6>
      <ul className="text-sm">
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Web Studio
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            DynamicBox Flex
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Programming Forms
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Integrations
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Command-line
          </Link>
        </li>
      </ul>
    </div>

    {/* 3rd block */}
    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 className="mb-2 font-medium text-grayscale-800">Resources</h6>
      <ul className="text-sm">
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Documentation
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Tutorials & Guides
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Blog
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Support Center
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Partners
          </Link>
        </li>
      </ul>
    </div>

    {/* 4th block */}
    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
      <h6 className="mb-2 font-medium text-grayscale-800">Company</h6>
      <ul className="text-sm">
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            About us
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Company values
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Pricing
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="#"
            className="text-grayscale-600 transition duration-150 ease-in-out hover:text-grayscale-900"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>

    {/* 5th block */}
    <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
      <h6 className="mb-2 font-medium text-grayscale-800">Subscribe</h6>
      <p className="mb-4 text-sm text-grayscale-600">
        Get the latest news and articles to your inbox every month.
      </p>
      <form>
        <div className="flex flex-wrap mb-4">
          <div className="w-full">
            <label className="block text-sm sr-only" htmlFor="newsletter">
              Email
            </label>
            <div className="relative flex items-center max-w-xs">
              <input
                id="newsletter"
                type="email"
                className="w-full px-3 py-2 pr-12 text-sm text-grayscale-800 form-input"
                placeholder="Your email"
                required
              />
              <button
                type="submit"
                className="absolute inset-0 left-auto"
                aria-label="Subscribe"
              >
                <span
                  className="absolute inset-0 right-auto w-px my-2 -ml-px bg-grayscale-300"
                  aria-hidden="true"
                ></span>
                <svg
                  className="flex-shrink-0 w-3 h-3 mx-3 text-blue-600 fill-current"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>
            {/* Success message */}
            {/* <p className="mt-2 text-sm text-green-600">Thanks for subscribing!</p> */}
          </div>
        </div>
      </form>
    </div>
  </div>;
};
