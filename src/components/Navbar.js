import logo from "../assets/shared/logo.svg";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import getWindowSize from "../functions/windowSize";

import { ThreeDots } from "react-loader-spinner";

export default function Navbar(props) {
  let activeClassName =
    "nav-link custom_nav_link text-decoration-none is-active";

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [nav, setNav] = useState(false);

  const activeRef = useRef(null);
  const [activeLoader, setActiveLoader] = useState(false);

  const handleLoader = () => {
    setNav(!nav);
    setActiveLoader(false);

    setTimeout(() => {
      setActiveLoader(true);
    }, 1500);
  };

  useEffect(() => {
    setWindowSize(getWindowSize());

    setTimeout(() => {
      setActiveLoader(true);
    }, 1500);

    // window.addEventListener("resize", handleWindowResize);

    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (
    windowSize.innerWidth > parseInt(576) &&
    windowSize.innerWidth <= parseInt(1200)
  ) {
    document
      .querySelectorAll(".nav-link.custom_nav_link > span")
      .forEach((el) => el.remove());
  }
  if (windowSize.innerWidth <= parseInt(992)) {
    document.querySelectorAll(".nav_main > hr").forEach((e) => e.remove());
  }

  return (
    <>
      {!activeLoader ? (
        <div className="main_loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="var(--color-secondary-500)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        ""
      )}
      <nav className="navbar navbar-expand-sm custom_nav">
        <div className="container-fluid custom_navbar_main p-0 mx-4 mx-md-0">
          <NavLink className="navbar-brand m-0 ms-5" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div
            className={`nav_main justify-content-end ${
              nav ? "" : "navbar_main"
            }`}
            id={nav ? "navbar_main_collapse" : "navbar_main_collapsed"}
          >
            <hr />
            <div
              className="navbar-nav custom_navbar-nav"
              id="custom_navbar-nav"
            >
              <div className="close_nav d-md-none" onClick={() => setNav(!nav)}>
                <span
                  className={nav ? "burger_line active" : "burger_line"}
                ></span>
                <span
                  className={nav ? "burger_line active" : "burger_line"}
                ></span>
                <span
                  className={nav ? "burger_line active" : "burger_line"}
                ></span>
              </div>
              <NavLink
                ref={activeRef}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "nav-link custom_nav_link text-decoration-none"
                }
                aria-current="page"
                to="/"
                onClick={handleLoader}
              >
                <span>00</span>
                {props.nav_1}
              </NavLink>
              <NavLink
                ref={activeRef}
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "nav-link custom_nav_link text-decoration-none"
                }
                to="/destination"
                onClick={handleLoader}
              >
                <span>01</span>
                {props.nav_2}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "nav-link custom_nav_link text-decoration-none"
                }
                to="/crew"
                onClick={handleLoader}
              >
                <span>02</span>
                {props.nav_3}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "nav-link custom_nav_link text-decoration-none"
                }
                to="/technology"
                onClick={handleLoader}
              >
                <span>03</span>
                {props.nav_4}
              </NavLink>

              <span className="nav-indicator"></span>
            </div>
          </div>
          <div className="close_nav d-md-none" onClick={() => setNav(!nav)}>
            <span className={nav ? "burger_line active" : "burger_line"}></span>
            <span className={nav ? "burger_line active" : "burger_line"}></span>
            <span className={nav ? "burger_line active" : "burger_line"}></span>
          </div>
        </div>
      </nav>
    </>
  );
}
