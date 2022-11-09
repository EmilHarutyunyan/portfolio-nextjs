import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Script from "next/script";
// Components
const DynamicLoader = dynamic(() => import("../components/loader"));

// Style
import {
  hero_section,
  nav_section,
  nav_social,
} from "../styles/Hero.module.scss";

// Data Social
import items from "../components/data/dataSocial";

// Svg Icons
import { CodeSandBoxIcon, GitHubIcon, LinkedinIcon } from "../components/svg";

export default function Home() {
  let aboutCanvasWrapper = useRef(false);
  const [isLoader, setLoader] = useState(true);

  const hero = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoader(false), 5000);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Emil and Erik Harutyunyan's Portfolio"
        />
        <meta name="keywords" content="NextJs, React, JavaScript" />
        <meta name="author" content="Emil and Erik" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harutyunyan's Portfolio" />
        <meta
          property="og:description"
          content="Emil and Erik Harutyunyan's Portfolio"
        />
        <meta property="og:image" content="/img/common/ogp_sun.jpg" />
        <meta property="og:site_name" content="Harutyunyan's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harutyunyan's Portfolio" />
        <meta
          name="twitter:description"
          content="Emil and Erik Harutyunyan's Portfolio"
        />
        <meta name="twitter:image" content="/img/common/ogp_sun.jpg" />
        <title>Harutyunyan's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7b7b7b" />
        <meta name="msapplication-TileColor" content="#220600" />
        <meta name="theme-color" content="#220600" />
      </Head>
      <main>
        {isLoader && <DynamicLoader />}
        <section className={hero_section}>
          <canvas className="p-canvas-webgl" id="canvas-webgl"></canvas>
          <ul className={nav_section}>
            <li>
              <a className="nav_item" href="/about">
                <span className="fire">A</span>
                <span className="burn">b</span>
                <span className="burn">o</span>
                <span className="burn">u</span>
                <span className="fire">t</span>
              </a>
            </li>
            <li>
              <a className="nav_item" href="/work">
                <span className="fire">W</span>
                <span className="burn">o</span>
                <span className="burn">r</span>
                <span className="fire">k</span>
              </a>
            </li>
          </ul>
          <ul className={nav_social}>
            {items?.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    aria-label={item.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item?.title === "GitHub" ? (
                      <GitHubIcon />
                    ) : item?.title === "Linkedin" ? (
                      <LinkedinIcon />
                    ) : item?.title === "CodeSandbox" ? (
                      <CodeSandBoxIcon />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <Script src="./js/main.js" />
      </main>
    </div>
  );
}
