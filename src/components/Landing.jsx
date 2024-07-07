import React from 'react';

function Landing() {
  return (
    <div className="relative w-screen overflow-x-hidden bg-[#B3001B]">
      {/* Navbar */}
      <div className="absolute top-0 w-full bg-black h-[10%] bg-transparent text-white flex items-center justify-center z-30">
        <span>Navbar</span>
      </div>
      
      {/* Section 1 */}
      <section className="sec1 h-screen flex items-center justify-center relative">
        <div className="text-white text-[10vh] sm:text-[13vh] md:text-[15vh] lg:text-[25vh] xl:text-[32vh] w-3/5 h-3/5 flex items-center justify-center text-center z-20 font-sans font-bold">
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">I</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">N</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">S</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">I</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">G</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">H</div>
          <div className="inline-block h-full flex items-center leading-none transform scale-y-150">T</div>
        </div>
        <div className="finalbg bg-[#B3001B] z-10 h-screen w-screen absolute"></div>
      </section>
      
    </div>
  );
}

export default Landing;
