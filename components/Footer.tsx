import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 flex flex-wrap justify-between text-gray-100">
        {/* Col-1 */}
        <div className="w-full md:w-3/12 mb-8 md:mb-0">
          {/* Col Title */}
          <div className="text-sm uppercase font-medium mb-4">
            Getting Started
          </div>
          {/* Links */}
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Installation
          </a>
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Release Notes
          </a>
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Upgrade Guide
          </a>
        </div>

        {/* Col-4 */}
        <div className="w-full md:w-3/12 mb-8 md:mb-0">
          {/* Col Title */}
          <div className="text-sm uppercase font-medium mb-4">
            Community
          </div>
          {/* Links */}
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            GitHub
          </a>
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Discord
          </a>
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Twitter
          </a>
        </div>

        {/* Col-4 */}
        <div className="w-full md:w-3/12 mb-8 md:mb-0">
          {/* Col Title */}
          <div className="text-sm uppercase font-medium mb-4">
            More
          </div>
          {/* Links */}
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Support
          </a>
          <a href="/" className="block mb-2 text-sm font-medium duration-200 hover:text-gray-300">
            Privacy Policy
          </a>
        </div>

        {/* Col-12 */}
        <div className="w-full pt-4 border-t border-gray-800 text-center mt-16 md:mt-0">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
