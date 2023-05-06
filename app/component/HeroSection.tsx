"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../variants";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-18 md:py-20 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <motion.div variants={fadeIn()} initial="initial" animate="animate">
            <Image
              src="/assets/martins1.jpg"
              alt=""
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </motion.div>
        </div>
        <motion.div className="md:mt-2 md:w-3/5">
          <motion.h1
            variants={fadeIn("down")}
            initial="initial"
            animate="animate"
            className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl"
          >
            Hi, I&#39;m Martins!
          </motion.h1>
          <motion.p
            variants={fadeIn()}
            initial="initial"
            animate="animate"
            className="mt-4 mb-6 text-lg md:text-2xl"
          >
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Frontend Developer{" "}
            </span>
            based in Nigeria. Working towards creating software that makes life
            easier and more meaningful.
          </motion.p>
          <motion.div variants={fadeIn()} initial="initial" animate="animate">
            <Link
              to="projects"
              className="px-6 py-3 font-semibold bg-teal-600 rounded shadow cursor-pointer text-neutral-100 hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
