import React from 'react';
import PlushChar from "../images/PlushCharmander.avif"

function Landing() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="absolute mainContentWrap  h-[70%] w-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
        <div className="relative grid-item-1 h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-4 gap-y-0">
          <div className="relative item-content-1 bg-[#B1B1B1] h-[50%] w-[50%] top-1/2">
            <h1 className="smallTagline">The pokemon encyclopedia for all generations</h1>
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[70%] w-[90%] transform top-1/4 ">
            <h1 className="title text-5xl">Poke Insight</h1>
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[80%] w-[90%]">
            <h1 className="relative smallDesc transform -translate-y-1/2 top-1/2">Poke Insight is a Pokemon Encyclopedia which features a curated selection of information of Pokemon, Berries and more!</h1>
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[50%] w-[30%] flex items-center justify-center">
            <h1 className="relative button md:text-[3vh]">Get Started</h1>
          </div>
        </div>
        <div className="relative grid-item-2 h-[80%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={PlushChar} className="relative charImage transform -translate-y-1/2 top-1/2"></img>
        </div>
      </div>
    </div>

  );
}

export default Landing;
