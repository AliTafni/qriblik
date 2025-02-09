import { Link } from "react-router-dom";
import { FaInstagram, FaPhone } from "react-icons/fa"; // Importing Icons
import SearchBar from "./Searchbar";
import LanguageSwitcher from "./LanguageSwitcher";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo_w.png"; // Make sure to import your logo

const Header = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Services Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                9ribLik
              </span>
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <DarkModeToggle />

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>

            {/* Phone Icon */}
            <a
              href="tel:+212699932627"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
              aria-label="Call Us"
            >
              <FaPhone className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={onMenuToggle}
              className="outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 p-4 shadow-top">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
