import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <div className="container">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BBP4YTBVKM');
          `}
        </Script>
        <Script strategy="beforeInteractive">
          {`
            // Insert this script in your index.html right after the <body> tag.
            // This will help to prevent a flash if dark mode is the default.
            
            (function() {
              // Change these if you use something different in your hook.
              var storageKey = 'usehooks-ts-dark-mode';
              var classNameDark = 'dark';
              var classNameLight = '';
            
              function setClassOnDocumentBody(darkMode) {
                if (darkMode) {
                  document.documentElement.classList.add(classNameDark);
                  document.documentElement.style.setProperty('color-scheme', 'dark');
                } else {
                  document.documentElement.style.setProperty("color-scheme", "light");
                }
              }
              
              var preferDarkQuery = '(prefers-color-scheme: dark)';
              var mql = window.matchMedia(preferDarkQuery);
              var supportsColorSchemeQuery = mql.media === preferDarkQuery;
              var localStorageTheme = null;
              try {
                localStorageTheme = localStorage.getItem(storageKey);
              } catch (err) {}
              var localStorageExists = localStorageTheme !== null;
              if (localStorageExists) {
                localStorageTheme = JSON.parse(localStorageTheme);
              }
            
              // Determine the source of truth
              if (localStorageExists) {
                // source of truth from localStorage
                setClassOnDocumentBody(localStorageTheme);
              } else if (supportsColorSchemeQuery) {
                // source of truth from system
                setClassOnDocumentBody(mql.matches);
                localStorage.setItem(storageKey, mql.matches);
              } else {
                // source of truth from document.body
                var isDarkMode = document.documentElement.classList.contains(classNameDark);
                localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
              }
            })();
          `}
        </Script>
      </div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content={isDarkMode ? "#18181b" : "#ffffff"} />
        <meta property="og:title" content="Vivid" />
        <meta
          property="og:description"
          content="Vivid is a front-end tool built for developers"
        />
        <meta
          property="og:image"
          content="https://vivid.lol/images/landingPage.png"
        />
      </Head>
      <NextSeo
        title="Vivid"
        description="Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code."
      />
      <Component {...pageProps} isDarkMode={isDarkMode} toggle={toggle} />
    </>
  );
};

export default MyApp;
