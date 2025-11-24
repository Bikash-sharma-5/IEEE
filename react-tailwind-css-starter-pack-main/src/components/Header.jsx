import React, { useState, useEffect } from 'react';
import { Home, FileText, Info, Star, BookOpen, Users, Ticket, Phone, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";
import { conferenceInfo } from '../data/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home", icon: <Home size={16} /> },
    { href: conferenceInfo.brochureLink, label: "Brochure", icon: <FileText size={16} />, target: "_blank" },
    { to: "about", label: "About", icon: <Info size={16} /> },
    { to: "highlights", label: "Highlights", icon: <Star size={16} /> },
    { to: "papers", label: "Call for Papers", icon: <BookOpen size={16} /> },
    { to: "committee", label: "Committee", icon: <Users size={16} /> },
    { to: "registration", label: "Registration", icon: <Ticket size={16} /> },
    { to: "contact", label: "Contact Us", icon: <Phone size={16} /> },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all w-screen duration-300 ${isScrolled ? 'bg-blue-900/90 backdrop-blur-lg shadow-xl' : 'bg-blue-900'}`}>
      <div className="mx-auto px-4">
        <div className="flex lg:justify-evenly justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3">
            <img src={conferenceInfo.aitLogoUrl} alt="AIT Logo" className="h-14 w-auto bg-white p-1 rounded-md shadow-sm object-cover" />
            <div className="hidden lg:flex text-white">
              <span className="font-bold text-xl">{conferenceInfo.longName}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:justify-between">
            {navLinks.map(link => {
              if (link.href) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    {link.icon}
                    <span className="text-md font-semibold">{link.label}</span>
                  </a>
                );
              } else {
                return (
                  <ScrollLink
                    key={link.label}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    {link.icon}
                    <span className="text-md font-semibold">{link.label}</span>
                  </ScrollLink>
                );
              }
            })}
          </nav>

          {/* Right: AWES Logo or Menu */}
          <div className="flex items-center space-x-4">
            <img src={conferenceInfo.headerRightLogoUrl} alt="AWES Logo" className="h-14 w-auto hidden md:block" />
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                {isOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-blue-900/95 backdrop-blur-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <nav className="px-2 pt-2 pb-4 space-y-4 sm:px-3">
          {navLinks.map(link => {
            if (link.href) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </a>
              );
            } else {
              return (
                <ScrollLink
                  key={link.label}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-4 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 cursor-pointer"
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </ScrollLink>
              );
            }
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
