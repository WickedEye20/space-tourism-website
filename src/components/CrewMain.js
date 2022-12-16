import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import bgTab from "../assets/crew/background-crew-tablet.jpg";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import setBodyImg from "../functions/bgImg";
import json from "../data.json";
import importAll from "../functions/imagesImport";
import MyLoader from "./Loader.js";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Virtual,
  Controller,
  Pagination,
  Mousewheel,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";

import getWindowSize from "../functions/windowSize";

SwiperCore.use([Virtual, Pagination, Controller, Mousewheel, Autoplay]);

export default function CrewMain() {
  // Set Background Image
  setBodyImg({ img: `url("${bgDesktop}")` });

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    setWindowSize(getWindowSize());
  }, []);

  if (windowSize.innerWidth <= parseInt(1200)) {
    setBodyImg({ img: `url("${bgTab}")` });
  }

  if (windowSize.innerWidth <= parseInt(576)) {
    setBodyImg({ img: `url("${bgMobile}")` });
  }

  // Import all images from folder
  const images = importAll(
    require.context("../assets/crew", false, /\.(png|jpe?g|svg)$/)
  );

  const [loadImg, setLoad] = useState(true);

  // Swiper Controller
  const swiper1Ref = useRef();
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);

  // Use effect for Loader
  useEffect(() => {
    const t = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  const slides3 = [];
  for (let i = 0; i < 4; i += 1) {
    slides3.push(
      <SwiperSlide key={`slide-${i}`} tag="div">
        <div className="dest_container crew_container">
          <div className="hero_main_head crew_role">{json.crew[i].role}</div>
          <div className="hero_main_head dest_head crew_head">
            {json.crew[i].name}
          </div>
          <div className="hero_main_subhead dest_subhead crew_subhead">
            {json.crew[i].bio}
          </div>
        </div>
      </SwiperSlide>
    );
  }

  const slides4 = [];
  for (let j = 0; j < 4; j += 1) {
    slides4.push(
      <SwiperSlide key={`slideImg-${j}`} tag="div">
        <img src={images[json.crew[j].images.png]} alt={"Loading"} />
      </SwiperSlide>
    );
  }

  return (
    <>
      <section className="destinationSection crewSection">
        <div className="row m-0 align-items-center h-100 flex-column-reverse flex-md-column flex-lg-row">
          <div className="col-lg-6">
            <div className="crew_right_section">
              <div className="dest_title crew_title">
                <span>02</span> Meet Your Crew
              </div>
              <Swiper
                id="main_Swiper"
                onSwiper={(swiper) => {
                  swiper1Ref.current = swiper;
                }}
                mousewheel={true}
                spaceBetween={10}
                slidesPerView={1}
                // autoplay={true}
                pagination={{
                  el:".crew_bullets.tech_bullets",
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet class_bullet",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active class_bullet_active",
                }}
              >
                {slides3}
              </Swiper>
              <div className="crew_bullets tech_bullets"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dest_title crew_title d-lg-none d-md-none">
              <span>02</span> Meet Your Crew
            </div>
            <div className="crew_img">
              <Swiper
                id="sub_Swiper"
                onSwiper={(swiper) => {
                  swiper2Ref.current = swiper;
                }}
                direction="horizontal"
                breakpoints={{ 576: { direction: "vertical" } }}
                spaceBetween={30}
                className="mySwiper2"
              >
                {slides4}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
