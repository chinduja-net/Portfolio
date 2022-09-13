import React from 'react'

const BottomNav = () => {
  return (
   <>
      <section className="flex justify-center text-white text-xl pb-24 bg-purple-700">
        <a
          href="https://github.com/chinduja-net"
          target="_blank"
          className="ml-1 mr-1 hover:text-purple-500 transition ease-in-out duration-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/chinduja-vijayaraj-64b166176"
          target="_blank"
          className="ml-2 mr-2 hover:text-purple-500 transition ease-in-out duration-500"
        >
          LinkedIn
        </a>
        <a
          href="mailto:cindhujavijayaraj@gmail.com"
          target="_blank"
          className="ml-1 mr-1 transform hover:text-purple-500 transition ease-in-out duration-500">
          Email
        </a>

       
      </section>
      <footer className = "bg-purple-700 font-sm text-white font-Fira">&copy;Copyright 2021 Chinduja Vijayaraj</footer>
      
   </>
  )
}

export default BottomNav
