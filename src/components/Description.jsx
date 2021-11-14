import React from "react";
import profileImage from "./Assets/Image/profile.jpg";

export default function Description() {
  return (
    <section
      id="description"
      className="m-10 px-10 py-60 pt-5 pb-10 bg-purple-700 rounded-lg shadow-lg">

      <h3 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white font-fira text-center ">
        Get To Know Me
      </h3>

      <div className="container mx-auto flex justify-evenly ">
        <div className="w-1/2 pt-4 pb-0 justify-center">
          <p className="leading-relaxed font-Fira text-white">
            My Name is Chinduja. <br />
            I'm a frontend Developer student studying in Jensen Yrkeshögskola. I
            live with my husband and daughter in Göteborg, Sweden. <br />
            I have always been curious about technology and love to learn about
            tech. <br />
            When I'm not coding I love to be in the nature either running or biking and spending time with my friends and family <br />I would
            love to meet over coffee and discuss work. Feel free to contact me!
          </p>
        </div>
        <div className="w-1/2 py-20 pt-4 pb-0 flex justify-center mb-8">
          <img
            className="flex object-contain shadow-lg items-center w-3/4 justify-center opacity-60 rounded-lg"
            src={profileImage}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
