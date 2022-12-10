import logo from "../assets/shared/logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let activeClassName = "nav-link custom_nav_link is-active";

  return (
    <nav className="navbar navbar-expand-lg custom_nav">
      <div className="container-fluid custom_navbar_main p-0">
        <NavLink className="navbar-brand m-0 ms-5" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end position-relative"
          id="navbarNavAltMarkup"
        >
          <hr />
          <div className="navbar-nav custom_navbar-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              aria-current="page"
              to="/"
            >
              <span>00</span>
              {props.nav_1}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/destination"
            >
              <span>01</span>
              {props.nav_2}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/crew"
            >
              <span>02</span>
              {props.nav_3}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : "nav-link custom_nav_link"
              }
              to="/technology"
            >
              <span>03</span>
              {props.nav_4}
            </NavLink>
            <span className="nav-indicator"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
