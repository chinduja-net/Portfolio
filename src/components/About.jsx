import React from "react";
import Navigation from "./Navigation";
import gradient from "./Assets/Image/landing.jpg";
import Social from "./Social";
import resume from "./Assets/ChindujaResume.pdf"

export default function About() {
  return (
      
      <section id= "about" className="container mx-auto py-60 flex-col font-bold shadow-lg cover text-white"
      style={{
        backgroundImage: "linear-gradient( rgba(76, 29, 149,0.9),rgba(76, 29, 149,0.9)), url(" + gradient + ")",
        backgroundSize: "1600px",
             
      }}>
        
               <Navigation />
        <h3 className="font-Fira flex justify-center text-2xl -mt-5 ">Hello,</h3>
        <h1 className="font-Montserrat flex justify-center text-5xl "> I'm Chinduja</h1>
        <h3 className="flex justify-center animate-pulse font-Fira text-3xl m-1"> Frontend Developer.</h3>
        <div className = "flex w-72 mx-auto">
        <a href= "#contact" className = "font-Fira text-xl flex justify-center content-center w-28 mx-auto bg-white text-purple-900 border-3 rounded transform hover:bg-purple-300 hover:scale-110">Hire Me </a>
        <a href= {resume} target="_blank" download className = "font-Fira text-xl flex justify-center content-center bg-white text-purple-900 w-28 mx-auto border-3 rounded transform hover:bg-purple-300 hover:scale-110">My Cv </a>
        </div>

        
        
        
      
      <Social />
    </section>
  );
} 
