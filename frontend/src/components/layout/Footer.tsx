"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">portoflio002000</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A concise showcase of my skills, projects, and professional journey. 
              Let's connect and create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-all duration-300 transform hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/skills"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@portoflio002000.com"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm group"
              >
                <FiMail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                hello@portoflio002000.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm group"
              >
                <FiPhone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                +1 (234) 567-890
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm group"
              >
                <FiDownload className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Stay Updated</h4>
            <p className="text-gray-600 mb-4 text-sm">Get notified about new projects and blog posts</p>
            <div className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent flex-1 w-full sm:w-auto transition-all duration-300"
              />
              <button
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} portoflio002000. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/contact"
                className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300 font-medium"
              >
                Let's Work Together →
              </Link>
              <div className="flex space-x-4">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;