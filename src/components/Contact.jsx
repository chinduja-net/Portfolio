import React from 'react'

function Contact() {
    return (
        <section id="contact" className="relative">
        <div className="container py-10 mx-auto flex sm:flex-nowrap">
            <form
              name="contact"
            className="flex mx-auto flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <h2 className="text-purple-900 flex justify-center sm:text-4xl text-3xl m-4 font-medium title-font">
              GET IN TOUCH !
            </h2>
            <p className="leading-relaxed mb-5 text-lg font-Fira font-black-200">
            Whether to just say hello or talk about work feel free to reach out to me 
            </p>

            <div className = "px-5">
              <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-lg text-purple-900">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full  bg-purple-300 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none font-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-lg text-purple-900">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-purple-300  rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none font-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-lg text-purple-900">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full mx-auto bg-purple-300  rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none font-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
           </div>

            </div> 
            <button
              type="submit"
              className="w-96 mx-auto text-black bg-purple-300 border-0 py-2 focus:outline-none hover:bg-purple-700 rounded text-lg transition ease-in-out duration-500">
              SEND
            </button>
          </form>
        </div>
        <div className = "flex justify-center  text-xl pb-24">
        
          <a href= "https://github.com/chinduja-net" className = "ml-1 mr-1 hover:text-purple-900 transition ease-in-out duration-500">GitHub</a>
          <a href="https://www.linkedin.com/in/chinduja-vijayaraj-64b166176" className = "ml-2 mr-2 hover:text-purple-900 transition ease-in-out duration-500">LinkedIn</a>
          <a href="mailto:cindhujavijayaraj@gmail.com" className = "ml-1 mr-1 hover:text-purple-900 transition ease-in-out duration-500">Email</a>
          
        </div>
      </section>
    )
}

export default Contact
