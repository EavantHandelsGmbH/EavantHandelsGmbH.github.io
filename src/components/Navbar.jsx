import { useState } from "react";
import logo from "../assets/logo_simple.png";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          <span className="font-bold text-lg">EAVANT Handels GmbH</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-blue-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-blue-900 md:bg-transparent overflow-hidden transition-all duration-300
    ${isOpen ? "max-h-40 p-4" : "max-h-0 md:max-h-full md:p-0"}`}
        >
          <li>
            <Link
              to="/about"
              className="block py-2 md:py-0 hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              className="block py-2 md:py-0 hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
