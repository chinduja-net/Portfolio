import React from "react";

export default function Navigation() {
  return (
    <header className="top-0 z-5">
      <div className="container font-Fira px-10 mx-auto flex flex-wrap p-5 flex-col text-purple-900 md:flex-row items-center font-extrabold">
        <div className="title-font mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:line-through	">
            CHINDUJA
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-xl justify-center">
           <a href="#description" className="mr-5">
            #ABOUT
          </a>

          <a href="#projects" className="mr-5 ">
            #PROJECTS
          </a>
         
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-xl mt-4  border-0 py-1 px-3 focus:outline-none focus:bg-purple-400 border-1 rounded-full md:mt-0">
          #SAY HELLO
        </a>
      </div>
    </header>
  );
}






