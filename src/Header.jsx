import { useState } from "react";
import "./header.css";
import logo from "./assets/logo-xl.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header w-full shadow-xl fixed top-0 left-0 z-10 bg-primary-50">
      <div className="py-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="MKWise Homes Logo" className="h-12 md:h-16" />
            </Link>

            {/* Hamburger menu for mobile only */}
            <div className="md:hidden relative">
              <button className="mobile-nav-toggler text-primary-600" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </button>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:block main-menu">
              <ul className="list-none m-0 p-0 flex gap-6 items-center">
                <li>
                  <Link to="/"> {/* Added Link components for navigation */}
                    <span className="text-primary-600 hover:text-secondary-600 font-bold no-underline transition-colors duration-300">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span className="text-primary-600 hover:text-secondary-600 font-bold no-underline transition-colors duration-300">About Us</span>
                  </Link>
                </li>
                <li className="outer-box">
                  <Link to="/contact">
                    <button className="theme-btn bg-secondary-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-primary-600">
                      <span className="txt">Get In Touch</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="mobile-menu w-full bg-white z-50 transition-all duration-300 ease-in-out overflow-hidden max-h-screen absolute top-full left-0 shadow-xl"> 
        <nav className="menu-box p-4">
          <ul className="list-none m-0 p-0">
            <li className="mb-3">
              <Link to="/">
                <span className="text-primary-600 font-bold no-underline" onClick={toggleMobileMenu}>Home</span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/about">
                <span className="text-primary-600 font-bold no-underline" onClick={toggleMobileMenu}>About Us</span>
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/contact">
                <button className="bg-secondary-600 text-white font-bold py-2 px-4 rounded" onClick={toggleMobileMenu}>
                  Get In Touch
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      )}
    </header>
  );
}

export default Header;