import { useState } from "react";
import "./header.css";
import logo from "./assets/logo-xl.svg";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header w-full shadow bg-primary-50 relative">
      <div className="header-top py-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <ul className="list-none m-0 p-0 flex flex-col sm:flex-row items-center justify-between">
            <li className="mr-6 mb-2 sm:mb-0">
              <span className="icon mr-2 text-gray-600">
                <i className="fa-solid fa-phone"></i>
              </span>
              <a href="tel:+44-7725839574" className="text-gray-600 no-underline">+44-7725839574,</a>
              <a href="tel:+01908-732244" className="text-gray-600 no-underline">+01908-732244</a>
            </li>
            <li>
              <span className="icon mr-2 text-gray-600">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <a href="mailto:contact@mkwisefinancial.com" className="text-gray-600 no-underline">contact@mkwisefinancial.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="header-bottom w-screen py-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="logo-box flex items-center justify-center w-full md:justify-start md:w-auto">
              <a href="/">
                <img src={logo} alt="MKWise Homes Logo" className="h-12 md:h-16"/>
              </a>
            </div>

            {/* Hamburger menu for mobile only */}
            <div className="md:hidden relative">
              <button className="mobile-nav-toggler text-primary-600" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <i className="fas fa-times"></i> // Close mobile nav icon
              ) : (
                <i className="fas fa-bars"></i> // Open mobile nav icon
              )}
              </button>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:block main-menu">
              <ul className="list-none m-0 p-0 flex gap-6">
                <li>
                  <a href="/" className="text-blue-900 font-bold no-underline transition-colors duration-300 hover:text-yellow-500">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-blue-900 font-bold no-underline transition-colors duration-300 hover:text-yellow-500">About Us</a>
                </li>
                <li className="outer-box ml-6">
                  <a href="/contact" className="theme-btn bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-900">
                    <span className="txt">Get In Touch</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

       {/* Mobile nav */}
       {isMobileMenuOpen && (
          <div className="mobile-menu w-full bg-white z-50"> 
            <nav className="menu-box p-4">
              <ul className="list-none m-0 p-0 ">
                <li className="mb-3">
                  <a href="/" className="text-gray-800 font-bold no-underline hover:text-blue-900">Home</a>
                </li>
                <li className="mb-3">
                  <a href="/about" className="text-gray-800 font-bold no-underline hover:text-blue-900">About Us</a>
                </li>
                <li className="mb-3">
                  <a href="/contact">
                    <button className="theme-btn bg-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-900">
                      Get In Touch
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
    </header>
  );
}

export default Header;