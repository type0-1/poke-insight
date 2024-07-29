import React from 'react';
import PlushChar from "../images/PlushCharmander.avif"
import Pikachu from "../images/Pikachu.png"
function Landing() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      <div className="absolute mainContentWrap  h-[70%] w-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 ">
        <div className="relative grid-item-1 h-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-4">
          <div className="relative item-content-1 h-[20%] w-[40%] flex items-center gap-x-3">
            <img src={Pikachu} className="relative pikaImage"></img>
            <h1 className="title text-3xl text-white"><b>Poké Insight</b></h1>
          </div>
          <div className="relative item-content-1 h-[70%] w-[80%]">
            <h1 className="title text-5xl text-white"><b><span className="text-[#FFAE03]">Pokémon Wisdom,</span> Made Simple.</b></h1>
          </div>
          <div className="relative item-content-1 h-[100%] w-[85%] text-[2.5vh] transform top-3/4">
            <h1 className="relative text-[#F1F1F1] text-[2.5vh] smallDesc transform -translate-y-1/2 top-1/4">Poké Insight is your go-to Pokémon encyclopedia, delivering curated, simplified insights on information you need.</h1>
          </div>
          <div className="relative item-content-1 bg-[#E67F0D] h-[60%] w-[75%] flex items-center justify-center transform top-3/4 rounded-md grid grid-cols-2 gap-4">
            <div className=""><h1 className="relative text-white button md:text-[2.5vh]">Get Started</h1></div>
            <div className=""><h1 className="relative text-white button md:text-[2.5vh]">Get Started</h1></div>
          </div>
        </div>
        <div className="relative grid-item-2 h-[80%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={PlushChar} className="relative charImage transform -translate-y-1/2 top-1/2 rounded-lg"></img>
        </div>
      </div>
    </div>

  );
}

export default Landing;
