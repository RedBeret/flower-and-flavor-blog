import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../img/flower-and-flavor-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="container">
      <nav className="relative bg-custom-peach flex items-center justify-between mx-auto max-w-[1240px] px-4 py-2">
        <Link to="/">
          <img
            src={image}
            alt="Flowers & Flavor Logo"
            className="z-30 h-28 md:h-40 logo"
          />
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden ml-4" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Desktop menu. Hidden on small screens */}
        <ul className="hidden md:flex justify-end flex-1">
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/about">About</Link>
          </li>
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile menu */}
        <ul
          className={`absolute md:hidden bg-custom-peach flex flex-col items-center w-full left-0 top-full transform ${nav ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/about">About</Link>
          </li>
          <li className="p-6 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer text-2xl">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
