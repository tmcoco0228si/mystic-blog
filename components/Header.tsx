import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChangeThemeButton } from "./ChangeTheneButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  const menuVariants = {
    open: { opacity: 1, scaleY: 1, originY: 0 },
    closed: { opacity: 0, scaleY: 0, originY: 0 },
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof Element) {
      if (!event.target.closest("header")) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md fixed top-0 left-0 z-10">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className={`container ${windowWidth >= 640 ? 'mx-auto px-4' : ''} sm:px-6 lg:px-8 flex justify-start items-center`}>
      <h1 className="text-white font-bold text-xs tiny:text-sm sm:text-lg md:text-xl mr-auto">
      trailstem blog
      </h1>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xl">&#9776;</span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="z-10 absolute left-0 w-full mt-2 py-2 bg-white shadow-lg rounded sm:mt-0 sm:bg-transparent sm:shadow-none sm:w-auto sm:static sm:flex gap-4 text-black font-semibold sm:text-white"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
              <a href="/" className="block px-4 py-2 sm:hover:underline">
                Home
              </a>
              <a href="/" className="block px-4 py-2 sm:hover:underline">
                About
              </a>
              <a href="/" className="block px-4 py-2 sm:hover:underline">
                Contact
              </a>
              <ChangeThemeButton />
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="hidden lg:flex gap-4 text-white">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/" className="hover:underline">
            About
          </a>
          <a href="/" className="hover:underline">
            Contact
          </a>
          <ChangeThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
