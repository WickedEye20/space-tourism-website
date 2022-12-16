import logo from "../assets/shared/logo.svg";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import getWindowSize from "../functions/windowSize";

export default function Navbar(props) {
  let activeClassName = "nav-link custom_nav_link is-active";

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const [nav, setNav] = useState(false);

  useEffect(() => {
    setWindowSize(getWindowSize());

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
    document
      .querySelectorAll(".nav_main > hr")
      .forEach((e) => e.remove());
  }

  return (
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
          <div className="navbar-nav custom_navbar-nav">
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
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              aria-current="page"
              to="/"
              onClick={() => setNav(!nav)}
            >
              <span>00</span>
              {props.nav_1}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/destination"
              onClick={() => setNav(!nav)}
            >
              <span>01</span>
              {props.nav_2}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/crew"
              onClick={() => setNav(!nav)}
            >
              <span>02</span>
              {props.nav_3}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/technology"
              onClick={() => setNav(!nav)}
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
  );
}
