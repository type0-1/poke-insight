import React from 'react';

function Landing() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="absolute mainContentWrap bg-[#D1D1D1] h-[70%] w-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
        <div className="relative grid-item-1 bg-[#C1C1C1] h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-4 gap-y-0">
          <div className="relative item-content-1 bg-[#B1B1B1] h-[20%] w-[50%]">
            The pokemon encyclopedia, for all generations
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[20%] w-[50%]">
            Poke Insight
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[20%] w-[50%]">
            Poke Insight is a Pokemon Encyclopedia which features a curated selection of information of Pokemon, Berries and more!
          </div>
          <div className="relative item-content-1 bg-[#B1B1B1] h-[20%] w-[50%]">
            Get Started
          </div>
        </div>
        <div className="relative grid-item-2 bg-[#B1B1B1] h-[80%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Image
        </div>
      </div>
    </div>

  );
}

export default Landing;
