import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import bg from "../assets/home/background-home-desktop.jpg";
import bgTab from "../assets/home/background-home-tablet.jpg";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import setBodyColor from "../functions/bgImg";
import getWindowSize from "../functions/windowSize";

export default function Home() {
  setBodyColor({ img: `url("${bg}")` });

  const [windowSize, setWindowSize] = useState(getWindowSize());

  // const [activeLoader, setActiveLoader] = useState(false);

  useEffect(() => {
    setWindowSize(getWindowSize());

    // window.addEventListener("resize", handleWindowResize);

    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize.innerWidth <= parseInt(1200)) {
    setBodyColor({ img: `url("${bgTab}")` });
  }

  if (windowSize.innerWidth <= parseInt(576)) {
    setBodyColor({ img: `url("${bgMobile}")` });
  }

  return (
    <>
      <section className="HomepageSection">
        <div className="homepage_main row m-0 justify-content-between text-lg-start">
          <div className="hero_content col-lg-5 p-0">
            <div className="hero_title">SO, YOU WANT TO TRAVEL TO</div>
            <div className="hero_main_head">SPACE</div>
            <div className="hero_main_subhead">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </div>
          </div>
          <div className="hero_click col-lg-6 text-lg-end text-md-center">
            <NavLink to="destination">
              <button className="btn btn-light explore_btn" to="/destination">
                Explore
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
