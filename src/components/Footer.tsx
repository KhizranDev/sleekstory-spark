
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-btb-navy text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/0ed8f67f-ccae-4d7b-8e8f-361a450b2c1e.png" 
              alt="BTB Consulting" 
              className="h-12 mb-6" 
            />
            <p className="text-btb-light mb-6 max-w-md">
              BTB Consulting provides strategic business solutions to help organizations navigate complexity and achieve sustainable success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-btb-light hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-btb-light hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-btb-light hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-btb-light hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-btb-light hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-btb-light hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="text-btb-light hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-btb-light hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-btb-light hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-btb-light hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-btb-light hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-btb-blue/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-btb-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BTB Consulting. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-btb-light hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
