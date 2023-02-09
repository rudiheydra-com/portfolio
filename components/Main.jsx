import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#eb5b00]">Rudi</span>
          </h1>
          <h1>A Full-Stack Developer</h1>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a passionate software developer with a strong interest in a wide
            range of technologies.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a lifelong learner and I love exploring new technologies and
            approaches to software development. I have experience in popular
            languages like Python, JavaScript, and Go, and I'm currently focused
            on learning how to deploy full-stack, production-ready business
            applications. I'm eager to gain hands-on experience in this area and
            I'm excited about the possibilities it opens up for me as a software
            developer.
          </p>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            In short, I'm passionate about technology and I'm always eager to
            explore new ways to use it to solve challenging problems.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaLinkedinIn />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
              <FaGithub />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
              <AiOutlineMail />
            </div>
            <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
