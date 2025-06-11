"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiDownload, FiMail } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition duration-300"
            >
              portoflio002000
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              Portfolio
            </Link>
            <Link
              href="/skills"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              Skills
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-indigo-50"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/resume"
              className="flex items-center text-indigo-600 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:border-indigo-700 transition duration-300 hover:bg-indigo-50 hover:scale-105"
            >
              <FiDownload className="mr-2" />
              Resume
            </Link>
            <Link
              href="/contact"
              className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-md text-sm font-medium transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <FiMail className="mr-2" />
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 p-2 rounded-md transition duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/skills"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              Skills
            </Link>
            <Link
              href="/testimonials"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-3 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link
                href="/resume"
                onClick={closeMenu}
                className="flex items-center justify-center text-indigo-600 hover:text-indigo-700 px-4 py-3 rounded-md text-sm font-medium border border-indigo-600 hover:border-indigo-700 transition duration-300 hover:bg-indigo-50"
              >
                <FiDownload className="mr-2" />
                Resume
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-md text-sm font-medium transition duration-300 shadow-md hover:shadow-lg"
              >
                <FiMail className="mr-2" />
                Hire Me
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;