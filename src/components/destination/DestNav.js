import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function DestNav() {
  let activeDestNav = "nav-link custom_nav_link is-active";

  return (
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
            >
              moon
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeDestNav : "nav-link custom_nav_link"
              }
              to="/destination/mars"
            >
              mars
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeDestNav : "nav-link custom_nav_link"
              }
              to="/destination/europa"
            >
              europa
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeDestNav : "nav-link custom_nav_link"
              }
              to="/destination/titan"
            >
              titan
            </NavLink>
            <span className="nav-indicator"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
