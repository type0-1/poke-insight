import React from 'react';
import "../css/landing.css"
function Landing() {
  return (
    <div className="relative w-screen overflow-x-hidden bg-[#B3001B]">
      {/* Navbar */}
      <div className="navcontainer absolute top-0 w-full bg-black h-[10%] bg-transparent text-white flex items-center justify-center z-30">
        <nav className="navwrap flex items-center justify-between w-full max-w-screen-xl px-4">
          <div className="logo">
            <a href="#" className="text-white text-[2vh] sm:text-[3vh] md:text-[4vh] font-bold">INSIGHT</a>
          </div>
          <div className="links flex space-x-2 text-[1.8vh] sm:space-x-6 sm:text-[3vh] md:space-x-12">
            <a href="#" className="text-white hover:text-gray-400">Pokemon</a>
            <a href="#" className="text-white hover:text-gray-400">Moves</a>
            <a href="#" className="text-white hover:text-gray-400">HMs</a>
            <a href="#" className="text-white hover:text-gray-400">Berries</a>
            <a href="#" className="text-white hover:text-gray-400">Github</a>
          </div>
        </nav>
      </div>
      
      {/* Section 1 */}
      <section className="sec1 h-screen flex items-center justify-center relative">
        <div className="h-[10%] w-[90%] bottom-[32%] sm:bottom-[29%] md:bottom-[24%] xl:bottom-[17%] absolute z-20 flex justify-center items-center">
          <h1 className="textdesc text-white text-center text-[2.7vh] sm:text-[4vh] md:text-[5vh] lg:text-[5.5vh]"> The encyclopedia for all pokemon fans</h1>
        </div>
        <div className="text-white text-[10vh] sm:text-[13vh] md:text-[15vh] lg:text-[20vh] xl:text-[32vh] w-3/5 h-3/5 flex items-center justify-center text-center z-20 font-sans font-bold">
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

      <div className="track absolute flex items-center justify-center w-full top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[40]">
        <div className="emoji flex items-center justify-center w-44 h-44 bg-[#AD2E24] rounded-full border-gradient">
          <div className="emoji-face relative w-full h-full flex items-center justify-center">
            <div className="eyes flex justify-between absolute top-1/3 w-16">
              <div className="eye bg-black rounded-full w-5 h-5"></div>
              <div className="eye bg-black rounded-full w-5 h-5"></div>
            </div>
            <div className="mouth absolute bottom-1/4 w-7 h-10 bg-black rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;