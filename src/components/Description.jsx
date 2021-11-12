import React from "react";
import profileImage from "./Assets/Image/picture.png";

export default function Description() {
  return (
    <section
      id="description"
      className="m-10 px-10 py-60 pt-5 pb-0 bg-purple-300 rounded-lg shadow-lg">

      <h3 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-900 font-fira text-center ">
        Get To Know Me
      </h3>

      <div className="container mx-auto flex justify-evenly ">
        <div className="pt-4 pb-0 justify-center">
          <p className="leading-relaxed font-Fira font-black-200">
            My Name is Chinduja. <br />
            I'm a frontend Developer student studying in Jensen Yrkeshögskola. I
            live with my husband and daughter in Göteborg, Sweden. <br />
            I have always been curious about technology and love to learn about
            tech. <br />
            When I'm not coding I love to be in nature either running or biking and spending time with my friends and family <br />I would
            love to meet over coffee and discuss work. Feel free to contact me!
          </p>
        </div>
        <div className="w-1/4 py-20 pt-4 pb-0 justify-center">
          <img
            className="object-contain h-3/4 rounded-full shadow-lg "
            src={profileImage}
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
