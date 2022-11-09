import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Components
const DynamicMenu = dynamic(() => import("../components/projects"));
const DynamicCategories = dynamic(() => import("../components/categories"));
const DynamicSidebar = dynamic(() => import("../components/sidebar"));
// Style
import { section, workSection } from "../styles/Work.module.scss";
import Head from "next/head";

import items from "../components/data/dataProjects";
let allCategories = ["all", ...new Set(items.map((item) => item.category).sort(function (a, b) {return a === b ? 0 : a < b ? -1 : 1}))];

export default function WorkSection() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState(items);
  const [sideBar, setSideBar] = useState(false);

  const [project, setProject] = useState(null);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category == category);
    setMenuItems(newItems);
  };

  const bodyOverflow = () => {
    if (!sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Emil and Erik Harutyunyan's Portfolio Work"
        />
        <meta name="keywords" content="NextJs, React, JavaScript" />
        <meta name="author" content="Emil and Erik" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harutyunyan's Portfolio Work" />
        <meta
          property="og:description"
          content="Emil and Erik Harutyunyan's Portfolio Work"
        />
        <meta property="og:image" content="/img/common/ogp_sun.jpg" />
        <meta property="og:site_name" content="Harutyunyan's Portfolio Work" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harutyunyan's Portfolio Work" />
        <meta
          name="twitter:description"
          content="Emil and Erik Harutyunyan's Portfolio Work"
        />
        <meta name="twitter:image" content="/img/common/ogp_sun.jpg" />
        <title>Harutyunyan's Portfolio Work</title>
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
      <section className={workSection}>
        <div className={section}>
          <DynamicCategories
            allCategories={allCategories}
            filterItems={filterItems}
          />
          <DynamicMenu
            {...{ sideBar, setSideBar, menuItems, setProject, bodyOverflow }}
          />
        </div>
        <DynamicSidebar
          {...{ sideBar, setSideBar, menuItems, project, bodyOverflow }}
        />
        <span onClick={() => router.push("/")} className="back">
          &#60;
        </span>
      </section>
    </>
  );
}
