import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { conferenceInfo, contact } from '../data/constants';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-4">{conferenceInfo.acronym}</h3>
          <p className="text-sm leading-relaxed">
            The International Conference on Nexus of Digitalization, Intelligence, and Applications serves as a premier platform for researchers and practitioners to share innovations and advancements in the field.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#papers" className="hover:text-white">Call for Papers</a></li>
            <li><a href="#registration" className="hover:text-white">Registration</a></li>
            <li><a href="#committee" className="hover:text-white">Committee</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <address className="not-italic text-sm space-y-2">
            <p>{conferenceInfo.venue}</p>
            <p>
              <a href={`mailto:${contact.emails[0]}`} className="hover:text-white">{contact.emails[0]}</a>
            </p>
            <p>Phone: {contact.phone}</p>
          </address>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} {conferenceInfo.organizedBy}. All Rights Reserved.
        </p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="https://x.com/ait_pune" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white" 
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/school/army-institute-of-technology-ait-pune/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white" 
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.facebook.com/aitpune/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white" 
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
