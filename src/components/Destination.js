import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bg from "../assets/destination/background-destination-desktop.jpg";
import setBodyColor from "../bgImg";
import json from "../data.json";
import MyLoader from "./Loader";

export default function Destination(props) {
  setBodyColor({ img: `url("${bg}")` });

  const [dest_name, setDestName] = useState(json.destinations[0].name);
  const [dest_desc, setDestDesc] = useState(json.destinations[0].description);
  const [dest_img, setDestImg] = useState(json.destinations[0].images.png);

  const [dest_distance, setDestDistance] = useState(
    json.destinations[0].distance
  );
  const [dest_travel, setDestTravel] = useState(json.destinations[0].travel);
  const [loadImg, setLoad] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  let activeDestNav = "nav-link custom_nav_link is-active";

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("../assets/destination", false, /\.(png|jpe?g|svg)$/)
  );

  const changeName = (e) => {
    // useEffect(() => {
    //   const t = setTimeout(() => {
    //     setLoad(false);
    //   }, 1500);

    //   return () => {
    //     clearTimeout(t);
    //   };
    // }, []);

    Object.keys(json.destinations).map((key) => {
      if (e === json.destinations[key].name) {
        setDestName(e);
        setDestDesc(json.destinations[key].description);
        setDestImg(json.destinations[key].images.png);
        setDestDistance(json.destinations[key].distance);
        setDestTravel(json.destinations[key].travel);
        setLoad(false);
        // setOpen(true);
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
              {loadImg ? (
                <MyLoader />
              ) : (
                <img src={images[dest_img]} alt={"Loading"} />
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="destination_right_section">
              <div className="dest_nav">
                <nav className="navbar navbar-expand-lg custom_nav">
                  <div className="container-fluid custom_navbar_main p-0">
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
                <div className="row">
                  <div className="col-lg-6 desc_detail">
                    <div className="desc_detail_name">Avg. Distance</div>
                    <div className="desc_detail_info">{dest_distance}</div>
                  </div>
                  <div className="col-lg-6 desc_detail">
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
