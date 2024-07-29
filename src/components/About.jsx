import React from "react";
import PikachuSquirtle from "../images/PikachuSquirtle.jpg";
function About(){
    return( 
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      <div className="relative ContentWrap h-[70%] w-[85%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-4">
        <div className="relative grid-item-2 h-[80%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={PikachuSquirtle} className="relative charImage transform -translate-y-1/2 top-1/2 rounded-lg"></img>
        </div>
        <div className="relative grid-item-1 h-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-rows-3">
          <div className="relative item-content-1 h-[70%] w-[80%]">
            <h1 className="title text-5xl text-white"><b>Quick Searches, <span className="text-[#FFAE03]">All Generations.</span></b> </h1>
          </div>
          <div className="relative item-content-1 h-[80%] w-[85%] text-[2.5vh] transform top-1/4">
            <h1 className="relative text-[#F1F1F1] text-[2.5vh] smallDesc">Poké Insight leverages PokeAPI, a comprehensive RESTful API that provides a vast database of all things Pokémon. Whether you need details on Pokémon, Types, Berries, or Items, you'll find the information quickly and effortlessly.</h1>
          </div>
          <div className="relative item-content-1 bg-[#E67F0D] h-[50%] w-[25%] flex items-center justify-center transform top-3/4 rounded-md">
            <h1 className="relative text-white button md:text-[2.5vh]">Learn More</h1>
          </div>
        </div>
      </div>
    </div>
      )
}
export default About