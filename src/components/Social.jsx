import React from "react";
import { ImLinkedin2, ImGithub, ImMail4 } from "react-icons/im";
const Social = () => {
  return (
    <div className="text-3xl inline-flex flex-col w-16 right-0 mt-64 inset-y-0 fixed">
      <a href="https://github.com/chinduja-net" target="_blank" className = "border-2 mr-0 border-white w-16 h-16 flex justify-center items-center shadow-lg text-white transform hover:bg-purple-400 transition ease-in-out duration-500 hover:text-purple-900 hover:border-2 hover:border-purple-700 hover:rotate-180"><ImGithub/></a>
      <a href="https://www.linkedin.com/in/chinduja-vijayaraj-64b166176" target="_blank" className = "border-2 border-white w-16 h-16 flex justify-center items-center shadow-lg text-white transform hover:bg-purple-400 transition ease-in-out duration-500 hover:text-purple-900 hover:border-2 hover:border-purple-700 hover:-rotate-180"><ImLinkedin2/></a>
      <a href="mailto:cindhujavijayaraj@gmail.com" target="_blank" className = "border-2 w-16 border-white h-16 flex justify-center items-center shadow-lg text-white transform hover:bg-purple-400 transition ease-in-out duration-500 hover:text-purple-900 hover:border-2 hover:border-purple-700 hover:rotate-180"><ImMail4/></a>
    </div>
  );
};

export default Social;


