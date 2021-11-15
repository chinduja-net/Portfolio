import React from "react";

export default function Navigation() {
  return (
    <header className="top-0 z-5 absolute">
      <div className="container font-Fira px-10 mx-auto flex flex-wrap p-5 flex-col text-white md:flex-row items-center font-extrabold ">
        <div className="title-font mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl transition hover:text-pink-700 300 ease-in-out">
            CHINDUJA
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-xl justify-center ">
           <a href="#description" className="mr-5 transition hover:text-pink-700 300 ease-in-out">
            #ABOUT
          </a>

          <a href="#projects" className="mr-5 transition hover:text-pink-700 300 ease-in-out">
            #PROJECTS
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-xl mt-4 border-0 py-1 px-3 
          transition hover:text-pink-700 300 ease-in-out focus:outline-none focus:bg-purple-400 border-1 rounded-full md:mt-0">
          #SAY HELLO
        </a>
      </div>
    </header>
  );
}






