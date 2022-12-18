import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import bgTab from "../assets/technology/background-technology-tablet.jpg";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import setBodyImg from "../functions/bgImg";
import json from "../data.json";
import importAll from "../functions/imagesImport";

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

export default function Technology() {
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
    require.context("../assets/technology", false, /\.(png|jpe?g|svg)$/)
  );

  // Swiper Controller
  const swiper3Ref = useRef();
  const swiper4Ref = useRef();

  useLayoutEffect(() => {
    swiper3Ref.current.controller.control = swiper4Ref.current;
    swiper4Ref.current.controller.control = swiper3Ref.current;
  }, []);

  const slides3 = [];
  for (let i = 0; i < 3; i += 1) {
    slides3.push(
      <SwiperSlide key={`slide-${i}`} tag="div">
        <div className="dest_container crew_container tech_container">
          <div className="hero_main_head crew_role tech_title">
            The Terminology...
          </div>
          <div className="hero_main_head dest_head crew_head">
            {json.technology[i].name}
          </div>
          <div className="hero_main_subhead dest_subhead crew_subhead tech_subhead">
            {json.technology[i].description}
          </div>
        </div>
      </SwiperSlide>
    );
  }

  const slides4 = [];
  let img;
  for (let j = 0; j < 3; j += 1) {
    if (
      windowSize.innerWidth <= parseInt(1200) ||
      windowSize.innerWidth <= parseInt(576)
    ) {
      img = images[json.technology[j].images.landscape];
    } else {
      img = images[json.technology[j].images.portrait];
    }
    slides4.push(
      <SwiperSlide key={`slideImg-${j}`} tag="div">
        <img src={img} alt={"Loading"} />
      </SwiperSlide>
    );
  }

  return (
    <>
      <section className="destinationSection crewSection techSection">
        <div className="dest_title crew_title">
          <span>03</span> Space Launch 101
        </div>
        <div className="row m-0 align-items-center h-100 flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <div className="crew_right_section tech_right_section">
              <div className="tech_bullets"></div>
              <Swiper
                id="tech_Swiper"
                onSwiper={(swiper) => {
                  swiper3Ref.current = swiper;
                }}
                mousewheel={true}
                spaceBetween={10}
                slidesPerView={1}
                direction="horizontal"
                breakpoints={{ 576: { direction: "vertical" } }}
                pagination={{
                  el: ".tech_bullets",
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet tech_bullet",
                  bulletActiveClass:
                    "swiper-pagination-bullet-active tech_bullet_active",
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      (index + 1) +
                      "</span>"
                    );
                  },
                }}
              >
                {slides3}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="crew_img tech_img">
              <Swiper
                id="tech_SwiperImg"
                onSwiper={(swiper) => {
                  swiper4Ref.current = swiper;
                }}
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
