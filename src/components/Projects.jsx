import React from 'react'
import {projects} from './Assets/Data/data.js'

function Projects() {
    return (

        <section id="projects" className="text-white bg-purple-700 body-font">
      <div className="container py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
                   <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 font-fira">
            What I do 
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base leading-relaxed font-Fira text-white">
          I like to code things from scratch, and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions. I enjoy designing website. I use design tools like Figma. I like to build fully responsive applications with custom designed layout.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center -m-4 px-4 py-2 flex-grow">
          
                    {projects.map((project) => (
                       <a href={project.link}
              className="sm:w-1/2 w-100 p-4" key = {project.title}>
              <div className="flex relative border shadow-lg w-54 h-54 ">
                 <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={project.image}
                /> 
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-500 bg-purple-400 opacity-0 shadow-xl hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-900 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="text-black font-Fira font-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
        
    )
}

export default Projects

