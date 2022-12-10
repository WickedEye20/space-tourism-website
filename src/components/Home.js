import React from 'react';
import bg from '../assets/home/background-home-desktop.jpg';
import setBodyColor from "../bgImg";

export default function Home() {
  setBodyColor({img: `url("${bg}")`})
  return (
    <>
       <section className="HomepageSection">
            <div className="homepage_main row m-0 justify-content-between">
                <div className="hero_content col-lg-5">
                    <div className="hero_title">SO, YOU WANT TO TRAVEL TO</div>
                    <div className="hero_main_head">SPACE</div>
                    <div className="hero_main_subhead">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</div>
                </div>
                <div className="hero_click col-lg-6 text-end">
                    <button className="btn btn-light explore_btn">Explore</button>
                </div>
            </div>
       </section> 
    </>
  )
}
