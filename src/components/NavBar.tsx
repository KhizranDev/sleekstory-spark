
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/0ed8f67f-ccae-4d7b-8e8f-361a450b2c1e.png" 
            alt="BTB Consulting" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#services" className={`nav-link ${!isScrolled ? 'text-white font-medium' : 'text-gray-700'}`}>Services</a>
          <a href="#case-studies" className={`nav-link ${!isScrolled ? 'text-white font-medium' : 'text-gray-700'}`}>Case Studies</a>
          <a href="#about" className={`nav-link ${!isScrolled ? 'text-white font-medium' : 'text-gray-700'}`}>Our Story</a>
          <a href="#contact" className={`nav-link ${!isScrolled ? 'text-white font-medium' : 'text-gray-700'}`}>Contact</a>
          <a 
            href="#contact" 
            className={`ml-4 px-5 py-2 rounded-full transition-colors duration-300 ${
              !isScrolled 
                ? 'bg-white text-btb-navy hover:bg-btb-lightest' 
                : 'bg-btb-navy text-white hover:bg-btb-blue'
            }`}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            !isScrolled ? 'text-white hover:text-btb-lightest' : 'text-gray-700 hover:text-btb-navy'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/lovable-uploads/0ed8f67f-ccae-4d7b-8e8f-361a450b2c1e.png" 
              alt="BTB Consulting" 
              className="h-10"
            />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-btb-navy"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-xl">
            <a href="#services" className="text-gray-700 hover:text-btb-navy" onClick={toggleMenu}>Services</a>
            <a href="#case-studies" className="text-gray-700 hover:text-btb-navy" onClick={toggleMenu}>Case Studies</a>
            <a href="#about" className="text-gray-700 hover:text-btb-navy" onClick={toggleMenu}>Our Story</a>
            <a href="#contact" className="text-gray-700 hover:text-btb-navy" onClick={toggleMenu}>Contact</a>
            <a
              href="#contact"
              className="mt-4 px-5 py-3 rounded-full bg-btb-navy text-white hover:bg-btb-blue text-center transition-colors duration-300"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
