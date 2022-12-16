import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import bgTab from "../assets/destination/background-destination-tablet.jpg";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import setBodyImg from "../functions/bgImg";
import json from "../data.json";
import importAll from "../functions/imagesImport";
import MyLoader from "./Loader.js";

import getWindowSize from "../functions/windowSize";

export default function Destination() {
  // Set Background Image
  setBodyImg({ img: `url("${bgDesktop}")` });

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    setWindowSize(getWindowSize());

    // window.addEventListener("resize", handleWindowResize);

    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize.innerWidth <= parseInt(1200)) {
    setBodyImg({ img: `url("${bgTab}")` });
  }

  if (windowSize.innerWidth <= parseInt(576)) {
    setBodyImg({ img: `url("${bgMobile}")` });
  }

  let activeDestNav = "nav-link custom_nav_link is-active";

  // Import all images from folder
  const images = importAll(
    require.context("../assets/destination", false, /\.(png|jpe?g|svg|webp)$/)
  );

  // Set States For Destination Information
  const [dest_name, setDestName] = useState(json.destinations[0].name);
  const [dest_desc, setDestDesc] = useState(json.destinations[0].description);
  const [dest_img, setDestImg] = useState(json.destinations[0].images.png);
  const [dest_distance, setDestDistance] = useState(
    json.destinations[0].distance
  );
  const [dest_travel, setDestTravel] = useState(json.destinations[0].travel);
  const [loadImg, setLoad] = useState(true);

  // Use effect for Loader
  useEffect(() => {
    const t = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  // Function to Change State According to Destination
  const changeName = (e) => {
    Object.keys(json.destinations).map((key) => {
      if (e === json.destinations[key].name) {
        setDestName(e);
        setDestDesc(json.destinations[key].description);
        setDestImg(json.destinations[key].images.webp);
        setDestDistance(json.destinations[key].distance);
        setDestTravel(json.destinations[key].travel);
      }
      return true;
    });
  };

  return (
    <>
      <section className="destinationSection">
        <div className="dest_title">
          <span>01</span> Pick Your Destination
        </div>
        <div className="row m-0 align-items-center">
          <div className="col-lg-7">
            <div className="dest_img">
              <img
                className="ms-lg-5 m-auto"
                src={images[dest_img]}
                alt={"Loading"}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="destination_right_section">
              <div className="dest_nav">
                <nav className="navbar navbar-expand-md custom_nav">
                  <div className="container-fluid custom_navbar_main p-0 justify-content-center justify-content-lg-start">
                    <div className="navbar-nav custom_navbar-nav">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeDestNav : "nav-link custom_nav_link"
                        }
                        aria-current="page"
                        to="/destination/moon"
                        onClick={() => changeName("Moon")}
                      >
                        moon
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeDestNav : "nav-link custom_nav_link"
                        }
                        to="/destination/mars"
                        onClick={() => changeName("Mars")}
                      >
                        mars
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeDestNav : "nav-link custom_nav_link"
                        }
                        to="/destination/europa"
                        onClick={() => changeName("Europa")}
                      >
                        europa
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeDestNav : "nav-link custom_nav_link"
                        }
                        to="/destination/titan"
                        onClick={() => changeName("Titan")}
                      >
                        titan
                      </NavLink>
                      <span className="nav-indicator"></span>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="dest_container">
                <div className="hero_main_head dest_head">{dest_name}</div>
                <div className="hero_main_subhead dest_subhead">
                  {dest_desc}
                </div>
                <hr />
                <div className="row justify-content-md-center gy-3 pt-3">
                  <div className="col-lg-6 col-md-4 desc_detail">
                    <div className="desc_detail_name">Avg. Distance</div>
                    <div className="desc_detail_info">{dest_distance}</div>
                  </div>
                  <div className="col-lg-6 col-md-4 desc_detail">
                    <div className="desc_detail_name">Est. Travel Time</div>
                    <div className="desc_detail_info">{dest_travel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
