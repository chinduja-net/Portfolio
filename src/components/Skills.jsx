import { BadgeCheckIcon} from "@heroicons/react/solid";
import React from "react";
const skills = ['Html & CSS ', 'JavaScript', 'React.Js', 'Node.Js', 'Express', 'Tailwind CSS','Agile Framework','Git, Figma']

export default function Skills() {
  return (
    <section id="skills">
      <div className="container w-90 py-10 mx-auto m-10 bg-purple-300 rounded-lg shadow-lg">
        <div className="text-center mb-20">
         
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-purple-900 font-fira text-center">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed font-Fira font-black-200 xl:w-2/4 lg:w-3/4 mx-auto">
          Proficient on the base Front End development technologies including HTML5, CSS3, JavaScript, Node.js, Express and React js.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-purple-900 rounded flex p-4 h-full items-center hover:bg-purple-700 transition ease-in-out 500s">
                <BadgeCheckIcon className="text-purple-300 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium font-Fira text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}