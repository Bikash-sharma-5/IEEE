import React, { useState, useEffect , useRef} from 'react';
import { BookOpen, Calendar, Users, Mail, MapPin, Star, Building, Link as LinkIcon, Home, FileText, Info, Phone, Menu, X, Ticket, Twitter, Linkedin, Facebook } from 'lucide-react';

import { Link as ScrollLink } from "react-scroll";

// --- MOCK ASSETS ---
// In a real project, you would import these from your assets folder
// e.g., import LogoAIT from './Assets/Logo-AIT.gif';
import LogoAIT from './Assets/Logo-AIT.gif';
import LogoAWES from './Assets/Logo-AWES.gif';
import BirdViewAIT from './Assets/Bird-View-AIT.jpg';
import LogoIEEE from './Assets/Screenshot 2025-10-30 024057.png'
import LogoACM from './Assets/Screenshot 2025-10-30 023125.png'
import ICNDIA from './Assets/FullLogo.jpg'
import ICNDIA2 from './Assets/FullLogo_NoBuffer.jpg'
import AITCM from './Assets/Screenshot 2025-10-30 022903.png'
import { motion } from 'framer-motion';
import {  } from 'lucide-react';




  
// --- Data from Brochure (ICNDIA-2026) ---
const conferenceInfo = {
  title: "IEEE International Conference on Nexus of Digitalization, Intelligence and Applications",
  acronym: "ICNDIA-2026",
  longName: "ARMY INSTITUTE OF TECHNOLOGY",
  date: "18th and 19th Sept 2026",
  mode: "Hybrid Mode",
  venue: "Army Institute of Technology, Pune, India",
 // affiliation: "Permanently Affiliated to Savitribai Phule Pune University, Autonomous College from AY 2025-26, NBA Accreditation (All UG Programs), NAAC Accredited",
  organizedBy: "Department of Information Technology",
  aitLogoUrl: LogoAIT,
  headerRightLogoUrl: LogoAWES,
  heroImageUrl: BirdViewAIT,
  brochureLink:  "https://drive.google.com/file/d/1cugpyEQ1qxsDIXM_pQe-EqL_n8eBOn3g/view?usp=drive_link",//"https://drive.google.com/file/d/1T10hYuw_JDv91pVFbBj7sIC52AGtExxr/view?usp=drive_link", // Placeholder link
  paperSubmissionLink: "https://cmt3.research.microsoft.com/ICNDIA2026"
};

const committee = {
  chiefHonoraryChair: { "name": "Maj Gen KK Chakrabarti", "title": "Chairman AIT" },
  patrons: [
    { "name": "Maj Gen Uday Shankar Sengupta (Retd.)", "title": "Director AIT" },
    { "name": "Col MK Prasad (Retd.)", "title": "Joint Director AIT" }
  ],
  convenors: [
    { "name": "Dr. B. P. Patil", "title": "Principal AIT" },
    { "name": "Dr. Amar Buchade", "title": "Chair IEEE Pune Section" }
  ],
  conferenceGeneralChair: { "name": "Dr. Mrs. Sangeeta Jadhav", "title": "HOD IT" },
  conferenceChairs: [
    { "name": "Dr. Ashwini Sapkal", "title": "" },
    { "name": "Prof. Vaishali Sachin Ingale", "title": "" }
  ],
  conferenceCoChair: { "name": "Dr. Dipika Birari", "title": "" },
  organizingCommittee: {
    technicalProgramChair: "Dr. Rahul Desai",
    publicationChair: "Dr. G M Walunjkar",
    publicityChair: "Prof. Yuvraj Gholap",
    financeChair: "Dr. Rupali Bagate"
  },
  internationalAdvisory: [
    "Dr. Saif M Mohammad, Principal Research Scientist, NRC Canada",
    "Dr Padmanabhan, Cameron, ME Research Engineer, Microsoft UK",
    "Dr Mohammed Fluid, Professor, Aday University, Australia",
    "Dr Sonali Bhadoria, Data Analyst, Holly Springs, US",
    "Dr Kulajeet Barman, Research Scientist, Kingston University, UK",
    "Dr Vijayakumar, Professor, IITB Pilani, Dubai",
    "Dr Prakas Pawar, Asst. Professor, BITS Pilani, Dubai",
  ],
  nationalAdvisory: [
    "Prof Anil Sahasrabudhe, Chairman, AICTE",
    "Prof Rajive Kumar, Member Secretary, AICTE",
    "Dr. Abhay Wagh, Chairman, DTE",
    "Dr. J M Bako, President, IETE",
    "Dr. Abhijit Joshi, IETE Governing Council Member",
    "Dr. B D Khandare, Chairman IETE, NIPR",
    "Mr. Pradeep Ras, Vice President, Region VI",
    "Dr. M Patil, Vice Chairman, CSI Pune Chapter",
    "Dr. Aditya Abhyankar, Chairman, BCI-IT, SPPU, Pune",
    "Dr. Parikshit N Mahalle, Member, BoS-IT, SPPU, Pune",
    "Dr. Sandip Thengade, Member, BoS-IT, SPPU, Pune",
    "Dr. Dharmashikha Shreevastav, Member, BoS-IT, SPPU, Pune",
    "Dr. Lambodaran P, Member, BoS-IT, SPPU, Pune",
    "Dr. Sudeep D. Thepade, Member, BoS-IT, SPPU, Pune",
    "Dr. Lalit Kumar Vashishtha, Member, BoS-IT, SPPU, Pune",
    "Dr. Sangeeta Joshi, Ex-PATNA",
    "Dr. Sachin Lodha, Vice President at TCS",
  ],
  technicalProgramme: [
    "Dr. Anil M. Shinde, Roanoke College, Jan 2022 Virginia, United States",
    "Dr. Sourav Sen Gupta, School of Computer Science and Engineering, Nanyang Technological University, Singapore",
    "Mr. Ambar Govekar, Director, Product Innovation, Media Private Limited",
    "Mr. Rahul Das, Pullman, Washington, United States",
    "Dr. Chetna Singhal, Indian Institute of Technology, Kharagpur, India",
    "Mr. Sameer Dalvi, Director, Head Business Advisory Services, UST",
    "Mr. Rajib Singh, Co-founder, Simbiot, India",
  ]
};


const keyHighlights = [
  "Technical sessions on various topics related to computer science and informatics",
  "Keynote addresses by experts",
  "All accepted and presented papers will be submitted to IEEE for possible inclusion in the IEEE Xplore Digital Library",
  "Publishing partner will assist IEEE publication standards",
  "Pre-conference tutorials"
];

const paperTopics = [
  "Digital Transformation and Innovation",
  "Artificial Intelligence and Machine Learning",
  "Internet of Things (IoT) and Smart Technologies",
  "Human-Computer Interaction and Digital User Experience",
  "Data Science, Analytics, and Big Data",
  "Applications of Digitalization and Intelligence in Key Sectors",
  "Digital Ethics, Security, and Governance",
  "Deep Learning in Computer Vision and Natural Language Processing",
  "Future Trends and Innovations in Defence Sector"
];


const importantDates = [
  { event: "Last Date for Receiving Full Paper", date: "15th Jan, 2026" },
  { event: "Intimation of Acceptance", date: "31st March, 2026" },
  { event: "Last Date for Camera Ready Copy", date: "30th June, 2026" },
  { event: "Last Date of Registration", date: "15th July, 2026" },
  { event: "Conference Dates", date: "18th-19th Sept, 2026" },
];

const registrationDetails = [
  {
    category: "Academicians/Students",
    earlyBird: { ieee: "Rs. 5000", nonIeee: "Rs. 5500" },
    afterJuly: { ieee: "Rs. 6000", nonIeee: "Rs. 6500" },
  },
  {
    category: "Industry Persons",
    earlyBird: { ieee: "Rs. 6000", nonIeee: "Rs. 6500" },
    afterJuly: { ieee: "Rs. 7000", nonIeee: "Rs. 7500" },
  },
  {
    category: "Foreign Authors",
    earlyBird: { ieee: "$95 (USD)", nonIeee: "$100 (USD)" },
    afterJuly: { ieee: "$105 (USD)", nonIeee: "$110 (USD)" },
  },
  {
    category: "Conference Attendee",
    earlyBird: { ieee: "Rs. 1500", nonIeee: "Rs. 1800" },
    afterJuly: { ieee: "Rs. 2000", nonIeee: "Rs. 2500" },
  },
  {
    category: "Extra Page Charges per Page",
    earlyBird: { ieee: "Rs. 800", nonIeee: "Rs. 1000" },
    afterJuly: { ieee: "Rs. 800", nonIeee: "Rs. 1000" },
  },
];


const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
          }
      }, options);

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  }, [ref, options]);

  return [ref, isVisible];
};


const contact = {
    name: "Prof. Yuvraj Gholap",
    phone: "9404751535",
    name1: "Prof. Anjali Hudedamani",
    phone1: "9172812015",
    emails: [
        "ygholap@aitpune.edu.in",
        "anjalihudedamani@aitpune.edu.in"
    ]
}

const aboutConferenceText = "International Conference on Nexus of Digitalization, Intelligence, and Applications (ICNDIA-2026) serves as a premier platform for researchers and practitioners to present and discuss the transformative impact of digital technologies and artificial intelligence across various sectors. Focusing on the convergence of these fields, the conference aims to foster collaboration and knowledge sharing, addressing both the opportunities and challenges of the digital transformation. Attendees will engage in insightful discussions, attend workshops, and network with leading experts, driving forward thinking solutions that harness the power of technology for societal advancement.";
const aboutDepartmentText = "The Department of Information Technology was established in the year 2001 with an intake of 120 students. The department believes in shaping the students in such a manner that they are readily absorbed by the industry and other professional organizations. The department continues to conquer new frontiers of knowledge through quality research works, conferences, QIPs and FDPs, by promoting the Teaching Learning Process. The department is a pioneer in establishing ACM and NPTEL student branches.";
const aboutAitText = "AIT was founded in 1994, as a result of the vision, and untiring efforts of Late Gen. B.C. Joshi PVSM, AVSM, ADC for the children of all ranks of the Indian Army. The lush green campus, its resilience and architectural splendor, and state of the art infrastructure, all provide vital ingredients for a delectable academic environment for the development of total quality engineers. AIT is ranked 139 in NIRF across India. AIT runs Undergraduate courses in Comp. Engg., IT, Mech, E&TC and Post Graduate course in Machine Design. All courses are affiliated to SPPU.";
const acknowledgement = "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support ."
// --- Reusable Components ---
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${className}`}>
    {children}
  </div>
);

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-20 scroll-mt-20 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// --- Layout Components ---



    // const Header = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const [isScrolled, setIsScrolled] = useState(false);
    
    //     useEffect(() => {
    //         const handleScroll = () => {
    //             setIsScrolled(window.scrollY > 10);
    //         };
    //         window.addEventListener('scroll', handleScroll);
    //         return () => window.removeEventListener('scroll', handleScroll);
    //     }, []);
    
    //     const navLinks = [
    //         { href: "#home", label: "Home", icon: <Home size={16} /> },
    //         { href: conferenceInfo.brochureLink, label: "Brochure", icon: <FileText size={16} />, target: "_blank" },
    //         { href: "#about", label: "About", icon: <Info size={16} /> },
    //         { href: "#highlights", label: "Highlights", icon: <Star size={16} /> },
    //         { href: "#papers", label: "Call for Papers", icon: <BookOpen size={16} /> },
    //         { href: "#committee", label: "Committee", icon: <Users size={16} /> },
    //         { href: "#registration", label: "Registration", icon: <Ticket size={16} /> },
    //         { href: "#contact", label: "Contact Us", icon: <Phone size={16} /> },
    //     ];
    
    //     return (
    //         <header className={`sticky top-0 z-50 transition-all w-screen duration-300 ${isScrolled ? 'bg-blue-900/90 backdrop-blur-lg shadow-xl' : 'bg-blue-900'}`}>
    //             <div className=" mx-auto px-4 ">
    //                 {/* Top bar with logos and affiliation */}
    //                 <div className="flex lg:justify-evenly justify-between items-center h-20 ">
    //                     {/* Left Logo & Title */}
    //                     <a href="#home" className="flex items-center space-x-3">
    //                         <img src={conferenceInfo.aitLogoUrl} alt="AIT Logo" className="h-14 w-auto bg-white p-1 rounded-md shadow-sm object-cover" />
    //                         <div className="hidden lg:flex  text-white">
    //                             <span className="font-bold text-xl ">{conferenceInfo.longName}</span>
    //                         </div>
    //                     </a>
    
    //                     {/* Desktop Nav in the middle */}
    //                     <nav className="hidden md:flex md:items-center md:justify-between ">
    //                         {navLinks.map(link => (
    //                             <a
    //                                 key={link.label}
    //                                 href={link.href}
    //                                 target={link.target}
    //                                 rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
    //                                 className="flex items-center space-x-2 px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
    //                             >
    //                                 {link.icon}
    //                                 <span className="text-md font-semibold">{link.label}</span>
    //                             </a>
    //                         ))}
    //                     </nav>
    
    //                     {/* Right side: AWES Logo for desktop, Menu for mobile */}
    //                     <div className="flex items-center space-x-4">
    //                         <img src={conferenceInfo.headerRightLogoUrl} alt="AWES Logo" className="h-14 w-auto hidden md:block" />
    //                         <div className="md:hidden">
    //                             <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
    //                                 {isOpen ? <X size={30} /> : <Menu size={30} />}
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    
    //             {/* Mobile Menu */}
    //             <div className={`md:hidden absolute w-full bg-blue-900/95 backdrop-blur-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
    //                 <nav className="px-2 pt-2 pb-4 space-y-4 sm:px-3">
    //                     {navLinks.map(link => (
    //                         <a
    //                             key={link.label}
    //                             href={link.href}
    //                             target={link.target}
    //                             rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
    //                             className="flex items-center space-x-4 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 block"
    //                             onClick={() => setIsOpen(false)}
    //                         >
    //                             {link.icon}
    //                             <span className="font-medium">{link.label}</span>
    //                         </a>
    //                     ))}
    //                 </nav>
    //             </div>
    //         </header>
    //     );
    // };


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
                 
                {/* Top bar with logos and affiliation */}
                <div className="flex lg:justify-evenly justify-between items-center h-20">
                    {/* Left Logo & Title */}
                    <div className="absolute top-0 right-1 md:top-40 md:right-1">
                      <a
                        href="https://cmt3.research.microsoft.com/ICNDIA2026"
                        className="bg-blue-200 text-blue-700 font-semibold px-5 flex py-2 rounded-full shadow-md hover:bg-blue-100 transition"
                      >
                        <LinkIcon className="mr-2" /> Submit Paper
                      </a>
                    </div>
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
                                    className="flex items-center space-x-4 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 block"
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
                                    className="flex items-center space-x-4 px-3 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 block cursor-pointer"
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

    

const HeroSection = () => (
    <section id="home" className="scroll-mt-20">
        {/* This section contains the main title and hero image */}
        <div className="bg-white pt-12 pb-6 text-center m-auto w-[70%] flex flex-col items-center justify-center">
            <div className=''>
                <img src={ICNDIA2} className='h-24'/>
            </div>
            <p className="text-gray-600 font-bold pb-5 mt-5">Department of Information Technology, Army Institute of Technology, Pune Organises</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-gray-800 mt-2 px-4 leading-tight ">
                {conferenceInfo.title}
            </h1>
            <p className="font-semibold text-2xl text-gray-700 mt-2">({conferenceInfo.acronym})</p>

            <div className='flex items-center justify-between w-screen max-h-max'>
                  <div className='w-[30%] flex flex-col items-center justify-center rounded-md border-2 border-black p-2'>
                      <div className='bg-blue-400 max-w-max p-2 rounded-md mb-2 font-bold'>
                        <p>TECHNICAL</p>
                        <p>CO-SPONSOR</p>
                      </div>
                      <div className='flex items-center justify-center '>
                        <img src={LogoIEEE} className='h-20'/>
                      </div>
                  </div>

                  <div className='w-[40%]'>
                      
                      <p className="text-red-600 font-bold text-xl mt-4">{conferenceInfo.date}</p>
                      <p className="text-gray-500">({conferenceInfo.mode})</p>
                  </div>

                  <div className='w-[30%] flex flex-col items-center justify-center rounded-md border-2 border-black p-2'>
                      <div className='bg-blue-400 max-w-max p-2 rounded-md mb-2 font-bold'>
                        <p>COLLABORATION</p>
                      </div>
                      <div className='flex items-center justify-center '>
                        <img src={LogoACM} className='h-20'/>
                        <img src={AITCM} className='h-20 ml-4'/>
                      </div>
                  </div>
            </div>
        </div>
        <div className="container mx-auto px-4 mt-4">
            <div 
                className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${conferenceInfo.heroImageUrl})` }}
                aria-label="Army Institute of Technology campus view"
            ></div>
        </div>
    </section>
);


// --- Page Content Sections ---

const AboutSection = () => (
  <Section id="about" title="About The Conference, Institute & Department">
  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-gray-700 leading-relaxed text-left">
      <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><Star className="text-blue-600 mr-3"/>About The Conference</h3>
          <p className="flex-grow">{aboutConferenceText}</p>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><Home className="text-blue-600 mr-3"/>About AIT</h3>
          <p className="flex-grow">{aboutAitText}</p>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center"><Building className="text-blue-600 mr-3"/>About The Department</h3>
          <p className="flex-grow">{aboutDepartmentText}</p>
      </div>
  </div>
</Section>
); // Importing necessary hooks



const KeyHighlightsSection = () => (
    <Section id="highlights" title="Key Highlights" className="bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                </div>
            ))}
        </div>
    </Section>
);

const ImportantDatesTimeline = () => (
  <div>
      <h3 className="text-2xl font-bold text-gray-700 mb-8 text-center lg:text-left">Important Dates</h3>
      <div className="relative border-l-2 border-blue-200 ml-3">
          {importantDates.map((item, index) => (
              <div key={index} className="mb-8 pl-10 relative">
                  <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-[14px] top-1 border-4 border-white flex items-center justify-center">
                     <Calendar size={12} className="text-white" />
                  </div>
                  <div className="p-1">
                      <p className="text-md font-bold text-blue-800">{item.date}</p>
                      <p className="text-gray-700 text-sm">{item.event}</p>
                  </div>
              </div>
          ))}
      </div>
  </div>
);


const CallForPapersSection = () => (
  <Section id="papers" title="Call for Papers & Important Dates">

    <div className="flex flex-col w-[100%] mx-auto">
      {/* ================== PAPERS INVITED SECTION ================== */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-xl font-bold text-blue-800 mb-8">
            Papers are invited on (but not limited to) the following topics:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Track 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Track 1: Digitalization</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Digital Transformation and Innovation</li>
                <li>Human-Computer Interaction and Digital User Experience</li>
                <li>Digital Ethics, Security, and Governance</li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-indigo-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Track 2: Intelligence</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science, Analytics, and Big Data</li>
                <li>Deep Learning in Computer Vision and Natural Language Processing</li>
              </ul>
            </div>

            {/* Track 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-purple-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Track 3: Applications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Internet of Things (IoT) and Smart Technologies</li>
                <li>Applications of Digitalization and Intelligence in Key Sectors</li>
                <li>Future Trends and Innovations in Defense Sector</li>
              </ul>
            </div>

            {/* Track 4 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-pink-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-pink-700 mb-4">
                Track 4: Emerging Consumer Technologies
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Health and Wellness Technologies for Consumers</li>
                <li>Smart and Connected Devices for Everyday Life</li>
                <li>AR, VR, and XR in Consumer Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Timeline */}
      <div className="flex items-center justify-center">
        <ImportantDatesTimeline />
      </div>

      {/* Paper Topics Horizontal Scroller */}
      <div className='w-[80%] flex flex-col items-center m-auto'>
        <h3 className="text-2xl justify-center w-[100%] font-bold text-gray-700 mb-6 text-center mt-6">Paper Topics</h3>
        <div className="relative overflow-hidden">
          {/* Three lines for scrolling */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x-negative space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Paper Submission Link */}
      <div className="mt-8 text-center">
        <a
          href={conferenceInfo.paperSubmissionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 shadow-md hover:scale-105"
        >
          <LinkIcon className="mr-2" /> Submit Your Paper
        </a>
      </div>

      <div className='mt-8 w-[50%] mx-auto text-center bg-gray-50 p-8 rounded-lg'>
        <p>
            "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
        </p>
      </div>
    </div>
  </Section>
);



// --- CSS (Global Styles) --- 

// Add the following CSS to implement the horizontal animation effect for the paper topics
const style = document.createElement('style');
style.innerHTML = `
@keyframes scroll-x {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

.animate-scroll-x {
    display: flex;
    animation: scroll-x 30s linear infinite;
}
`;
document.head.appendChild(style);

const AnimatedCard = ({ children, delay, className }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
      <div
          ref={ref}
          className={`transition-all duration-700 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${delay}ms` }}
      >
          {children}
      </div>
  );
};

const CommitteeList = ({ title, members }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return(
      <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">{title}</h3>
          <div ref={ref} className="flex flex-wrap justify-center gap-3 text-left">
              {members.map((member, index) => (
                  <div
                      key={index}
                      className={`transition-all duration-500 bg-white shadow-md border border-gray-200 text-gray-700 px-4 py-2 rounded-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                  >
                      {member}
                  </div>
              ))}
          </div>
      </div>
  );
};

const CommitteeSection = () => (
  <Section id="committee" className="bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Meet the Committee</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">Guiding the conference with expertise and dedication, our committee comprises leaders and innovators from academia and industry.</p>
          
          {/* Main Organizing Committee */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Patron-In-Chief (full width) */}
            <AnimatedCard delay={0} className="col-span-1 md:col-span-2 lg:col-span-4">
                <Card className="border p-5 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-indigo-800 mb-1">Chief Honorary Chair</h3>
                <p className="text-gray-800 text-lg">
                    {committee.chiefHonoraryChair.name}, {committee.chiefHonoraryChair.title}
                </p>
                </Card>
            </AnimatedCard>

            {/* Patrons (2 cards, side by side) */}
            {committee.patrons.map((p, index) => (
                <AnimatedCard key={index} delay={150 + index * 100} className="col-span-2">
                <Card className="border p-5 hover:shadow-xl transition-shadow h-full">
                    <h3 className="text-xl font-bold text-indigo-800 mb-1">Honorary Chair</h3>
                    <p className="text-gray-800 text-lg">{p.name}, {p.title}</p>
                </Card>
                </AnimatedCard>
            ))}

            {/* Convenors (2 cards, side by side) */}
            {committee.convenors.map((c, index) => (
                <AnimatedCard key={index} delay={200 + index * 100} className="col-span-2">
                <Card className="border p-5 hover:shadow-xl transition-shadow h-full">
                    <h3 className="text-xl font-bold text-indigo-800 mb-1">Convenor</h3>
                    <p className="text-gray-800 text-lg">{c.name}, {c.title}</p>
                </Card>
                </AnimatedCard>
            ))}

            {/* Conference General Chair (full width) */}
            <AnimatedCard delay={250} className="col-span-1 md:col-span-2 lg:col-span-4">
                <Card className="border p-5 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-indigo-800 mb-1">Conference General Chair</h3>
                <p className="text-gray-800 text-lg">
                    {committee.conferenceGeneralChair.name}, {committee.conferenceGeneralChair.title}
                </p>
                </Card>
            </AnimatedCard>

            {/* Conference Chairs (each 2 columns wide) */}
            {committee.conferenceChairs.map((c, index) => (
                <AnimatedCard key={index} delay={300 + index * 100} className="col-span-2">
                <Card className="border p-5 hover:shadow-xl transition-shadow h-full">
                    <h3 className="text-xl font-bold text-indigo-800 mb-1">Conference Chair</h3>
                    <p className="text-gray-800 text-lg">
                    {c.name}{c.title && `, ${c.title}`}
                    </p>
                </Card>
                </AnimatedCard>
            ))}

            {/* Conference Co-Chair (1 column only) */}
            <AnimatedCard delay={350} className="col-span-1">
                <Card className="border p-5 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-indigo-800 mb-1">Conference Co-Chair</h3>
                <p className="text-gray-800 text-lg">
                    {committee.conferenceCoChair.name}
                    {committee.conferenceCoChair.title && `, ${committee.conferenceCoChair.title}`}
                </p>
                </Card>
            </AnimatedCard>

            {/* Organizing Committee (1 col each) */}
            {Object.entries(committee.organizingCommittee).map(([role, person], index) => (
                <AnimatedCard key={role} delay={400 + index * 100} className="col-span-1">
                <Card className="border p-5 hover:shadow-xl transition-shadow h-full">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 capitalize">
                    {role.replace(/([A-Z])/g, " $1")}
                    </h3>
                    <p className="text-gray-600">{person}</p>
                </Card>
                </AnimatedCard>
            ))}
        </div>


          {/* Other Committees */}
          <CommitteeList title="International Advisory Committee" members={committee.internationalAdvisory} />
          <CommitteeList title="National Advisory Committee" members={committee.nationalAdvisory} />
          <CommitteeList title="Technical Advisory Committee" members={committee.technicalProgramme} />
      </div>
  </Section>
);



const RegistrationSection = () => (
  <Section id="registration" title="Registration Details">
    <div className="max-w-6xl mx-auto overflow-x-auto">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border text-sm text-center text-gray-800">
          {/* Header */}
          <thead>
            <tr className="bg-blue-900/90 text-white text-lg font-bold">
              <th colSpan={5} className="py-3">REGISTRATION DETAILS</th>
            </tr>
            <tr className="bg-blue-200 font-semibold">
              <th rowSpan={2} className="border px-4 py-2">Registration Category</th>
              <th colSpan={2} className="border px-4 py-2">
                Early Bird Registration <br /> Before 30th June 2026
              </th>
              <th colSpan={2} className="border px-4 py-2">
                Registration After 1st July 2026
              </th>
            </tr>
            <tr className="bg-blue-100 font-semibold">
              <th className="border px-4 py-2 ">IEEE Member</th>
              <th className="border px-4 py-2 ">Non IEEE Member</th>
              <th className="border px-4 py-2 ">IEEE Member</th>
              <th className="border px-4 py-2 ">Non IEEE Member</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {registrationDetails.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="border px-4 py-2 font-medium">{item.category}</td>
                <td className="border px-4 py-2">{item.earlyBird.ieee}</td>
                <td className="border px-4 py-2">{item.earlyBird.nonIeee}</td>
                <td className="border px-4 py-2">{item.afterJuly.ieee}</td>
                <td className="border px-4 py-2">{item.afterJuly.nonIeee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Section>
);



const ContactSection = () => (
  <Section id="contact" title="Venue & Contact" className="bg-gray-50">
    <div className="grid md:grid-cols-2 gap-10 w-[90%] mx-auto items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Get In Touch</h3>
        <div className="space-y-4 text-gray-700 text-lg">
          <div className="flex items-start">
            <MapPin className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <span>{conferenceInfo.venue}</span>
          </div>
          <div className="flex items-start">
            <Users className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div className='flex flex-col flex-wrap-reverse'>
            <span>{contact.name}, {contact.phone}</span>
            
            <span>{contact.name1}, {contact.phone1}</span>
            </div>
          </div>
          <div className="flex items-start">
            <Mail className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
                {contact.emails.map(email => (
                    <a key={email} href={`mailto:${email}`} className="block hover:text-blue-700">{email}</a>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-xl h-[350px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3375975017303!2d73.8728977145294!3d18.606926387366906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1721390012345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location of the venue"
        ></iframe>
      </div>
    </div>
  </Section>
);

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

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white font-sans w-screen ">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <KeyHighlightsSection />
        <CallForPapersSection />
        <CommitteeSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
