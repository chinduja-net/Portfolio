import React from "react";
import { ImLinkedin2, ImGithub, ImMail4 } from "react-icons/im";
const Social = () => {
  return (
    <div className="text-3xl inline-flex flex-col w-16 right-0 mt-64 inset-y-0 fixed">
      <a href="https://github.com/chinduja-net" target="_blank" className = "border-2 mr-0 border-gray-900 w-14 h-14 flex justify-center items-center shadow-lg text-purple-500 hover:bg-purple-900 transition ease-in-out duration-500 "><ImGithub/></a>
      <a href="https://www.linkedin.com/in/chinduja-vijayaraj-64b166176" target="_blank" className = "border-2 border-gray-900 w-14 h-14 flex justify-center items-center shadow-lg text-purple-500 hover:bg-purple-900 transition ease-in-out duration-500 "><ImLinkedin2/></a>
      <a href="mailto:cindhujavijayaraj@gmail.com" target="_blank" className = "border-2 w-14 border-gray-900 h-14 flex justify-center items-center shadow-lg text-purple-500 hover:bg-purple-900 transition ease-in-out duration-500 "><ImMail4/></a>
    </div>
  );
};

export default Social;


