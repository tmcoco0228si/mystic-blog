import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle window resize
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

  // Close mobile menu when window size is larger than 1024px
  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  // Animation variants for the mobile menu
  const menuVariants = {
    open: { opacity: 1, scaleY: 1, originY: 0 },
    closed: { opacity: 0, scaleY: 0, originY: 0 },
  };

  // Close mobile menu when clicked outside of the menu
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
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">MyLogo</h1>
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ≡
        </button>
        <AnimatePresence>
  {isOpen && (
    <motion.nav
      className="z-10 absolute left-0 w-full mt-2 py-2 bg-white shadow-lg rounded lg:mt-0 lg:bg-transparent lg:shadow-none lg:w-auto lg:static lg:flex gap-4 text-black font-semibold lg:text-white"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      transition={{ duration: 0.3 }}
    >
      <a href="/" className="block px-4 py-2 lg:hover:underline">
        Home
      </a>
      <a href="/about" className="block px-4 py-2 lg:hover:underline">
        About
      </a>
      <a
        href="/contact"
        className="block px-4 py-2 lg:hover:underline"
      >
        Contact
      </a>
    </motion.nav>
  )}
</AnimatePresence>
        <nav className="hidden lg:flex gap-4 text-white">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
