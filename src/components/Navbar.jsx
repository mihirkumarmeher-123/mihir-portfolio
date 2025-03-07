/**
 * @copyright 2025 Mihir kumar Meher
 * @license Apache-2.0
 */

/**
 * Node Modules
 */


import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="sticky top-0 right-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-zinc-900 z-[1]">
      <h1 className="w-full text-3xl font-bold  m-4 transition delay-100 duration-300 ease-in-out hover:skew-2 cursor-pointer">
        Port<span className="text-yellow-400">folio</span>
        </h1>
      <ul className="hidden md:flex">
        <li className="px-3 py-2 hover:border-1 border-yellow-400 hover:text-yellow-400 rounded-md "><a href="#home"><AiOutlineHome  className="mx-auto mb-1"/>Home</a></li>
        <li className="px-3 py-2 hover:border-1 border-yellow-400 hover:text-yellow-400 rounded-md "><a href="#about"><AiOutlineUser  className="mx-auto mb-1"/> About</a></li>
        <li className="px-3 py-2 hover:border-1 border-yellow-400 hover:text-yellow-400 rounded-md "><a href="#work"><AiOutlineFundProjectionScreen className="mx-auto mb-1"/>Projects</a></li>
        <li className="px-3 py-2 hover:border-1 border-yellow-400 hover:text-yellow-400 rounded-md "><a href="#contact"><IoCallOutline className="mx-auto mb-1" />Contact</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} className="hover:cursor-pointer"/> : <AiOutlineMenu size={20} className="hover:cursor-pointer"/>}
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden z-[1]"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold  m-4 ">
        Port<span className="text-yellow-400">folio</span>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 hover:border-l-2 hover:border-yellow-500 hover:font-bold hover:text-md flex items-center"><AiOutlineHome  className="mr-3"/><a href="#home">Home</a></li>
          <li className="p-4 hover:border-l-2 hover:border-yellow-500 hover:font-bold hover:text-md flex items-center"><AiOutlineUser  className="mr-3"/><a href="#about"> About</a></li>
          <li className="p-4 hover:border-l-2 hover:border-yellow-500 hover:font-bold hover:text-md flex items-center"><AiOutlineFundProjectionScreen className="mr-3"/><a href="#work">Projects</a></li>
          <li className="p-4 hover:border-l-2 hover:border-yellow-500 hover:font-bold hover:text-md flex items-center"><IoCallOutline className="mr-3" /><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;
