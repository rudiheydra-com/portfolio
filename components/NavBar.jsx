import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full 2xl:px-16">
        <Image
          className="px-2"
          src="/../public/assets/LOGO.png"
          alt="/"
          width="125"
          height="50"
        />
        <div className="px-4">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase ">Home</li>
            </Link>
            <Link href="/About">
              <li className="ml-10 text-sm uppercase  ">About</li>
            </Link>
            <Link href="/Skills">
              <li className="ml-10 text-sm uppercase  ">Skills</li>
            </Link>
            <Link href="/Projects">
              <li className="ml-10 text-sm uppercase  ">Projects</li>
            </Link>
            <Link href="/Contact">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/LOGO.png"
                alt="/"
                width="87"
                height="35"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#eb5b00]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaGithub />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <AiOutlineMail />
                </div>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
