import React from "react";
import Image from "next/image";
import { skills } from "../../data";
const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-32">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-2xl font-bold text-center md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Martins and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> frontend developer
              based in Nigeria. i started self-teaching how to code barely a
              year ago and since then, i have tremendously improved my
              skillsets.
            </p>
            <br />
            <p>
              I am passionate about using technology to create elegant solutions
              for businesses and individuals in form of web application while
              also ensuring that user-experience and functionality are
              prioritized.
            </p>
            <br />
            <p>
              My goal is to become a senior frontend engineer whose experience
              would be utilized in helping aspiring developers who are looking
              to build a career in tech.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>

            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="px-4 py-2 mt-2 mr-2 font-semibold text-gray-500 bg-gray-200 rounded"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
