import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-purple text-white">
      <div className="container mx-auto px-10 md:px-20">
        <nav className="flex justify-between gap-x-10 items-center h-14">
          <Link className="text-xl font-bold z-10" to="/">
            Discord
          </Link>
          <ul className="gap-10 text-md font-normal hidden md:flex">
            <Link className="hover:border-b-2 h-5 z-10" to="/download">
              Download
            </Link>
            <Link className="hover:border-b-2 h-5 z-10" to="/nitro">
              Nitro
            </Link>
            <Link className="hover:border-b-2 h-5 z-10" to="/safety">
              Safety
            </Link>
            <Link className="hover:border-b-2 h-5 z-10" to="/support">
              Support
            </Link>
            <Link className="hover:border-b-2 h-5 z-10" to="/blog">
              Blog
            </Link>
            <Link className="hover:border-b-2 h-5 z-10" to="/career">
              Career
            </Link>
          </ul>
          <div className="flex gap-2">
            <button className="rounded-3xl p-3 bg-white font-semibold text-black text-sm hover:shadow-lg hover:text-purple transition ease-in delay-100 z-10">
              <Link to="/app">Login</Link>
            </button>
            <div
              className="flex flex-col w-7 justify-center gap-1 cursor-pointer md:hidden"
              onClick={toggleNav}
            >
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-white"></div>
              <div className="h-1 bg-white"></div>
            </div>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-0 w-1/3 h-screen bg-neutral-200 z-20 p-4 rounded-l-2xl md:hidden">
          <div className="flex flex-col gap-5">
            <div className="flex text-black justify-between items-center">
              <div>Discord</div>
              <div onClick={toggleNav}>X</div>
            </div>
            <div className="h-0.5 bg-black"></div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 rounded-xl bg-gray-100 p-2"
                  : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Download
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Nitro
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Safety {">"}
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Mod Academy {">"}
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Support
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Careers
            </NavLink>
            <div className="h-0.5 bg-black"></div>

            <div className="bg-indigo w-full rounded-3xl p-3 text-center">
              Download for Windows
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
