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
    if (windowWidth >= 640) { // スマートフォンの幅に合わせて変更
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
    <header className="bg-gray-800 text-white shadow-md">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg sm:text-2xl">MyLogo</h1>
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ≡
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
