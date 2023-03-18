import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 flex flex-wrap justify-between text-gray-100">
        {/* Col-1 */}
        <div className="w-full md:w-3/12 mb-8 md:mb-0">
          {/* Col Title */}
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
        </div>

        {/* Col-2 */}
        <div className="w-full md:w-2/12 mb-8 md:mb-0">
          {/* Col Title */}
          <div className="text-sm uppercase font-medium mb-4">
            Follow Us
          </div>
          {/* Links */}
          <div className="flex items-center">
            <a href="/" className="mr-4 text-lg hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="/" className="mr-4 text-lg hover:text-gray-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="mr-4 text-lg hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

          </div>
        </div>

        {/* Col-12 */}
        <div className="w-full pt-4 border-t border-gray-800 text-center md:pt-0">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer