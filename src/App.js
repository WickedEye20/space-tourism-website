import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <Router>
        <Navbar
          nav_1="Home"
          nav_2="Desination"
          nav_3="Crew"
          nav_4="Technology"
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/destination"
            element={<Navigate to="/destination/moon" />}
          />
          <Route
            exact
            path="/destination/moon"
            element={<Destination name="Moon" />}
          />
          <Route
            exact
            path="/destination/mars"
            element={<Destination name="Mars" />}
          />
          <Route
            exact
            path="/destination/europa"
            element={<Destination name="Europa" />}
          />
          <Route
            exact
            path="/destination/titan"
            element={<Destination name="Titan" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
