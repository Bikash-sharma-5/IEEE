import React from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { conferenceInfo, logos } from '../../data/constants';

const HeroSection = () => (
  <section id="home" className="scroll-mt-20">
    <div className="bg-white pt-6 md:pt-12 pb-6 text-center mx-auto w-full md:w-[90%] lg:w-[70%] px-4 flex flex-col items-center justify-center">
      <div className=''>
        <img src={logos.ICNDIA2} className='h-16 md:h-24' alt="ICNDIA Logo" />
      </div>
      <p className="text-gray-600 font-bold text-xs md:text-base pb-3 md:pb-5 mt-3 md:mt-5">Department of Information Technology, Army Institute of Technology, Pune Organises</p>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold uppercase text-gray-800 mt-2 px-2 md:px-4 leading-tight ">
        {conferenceInfo.title}
      </h1>
      <p className="font-semibold text-lg md:text-2xl text-gray-700 mt-2">({conferenceInfo.acronym})</p>

      <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-screen gap-4 md:gap-0 mt-4 md:mt-0 max-h-max'>
        <div className='w-full md:w-[30%] flex flex-col items-center justify-center rounded-md border-2 border-black p-2'>
          <div className='bg-blue-400 max-w-max px-3 py-1 md:p-2 rounded-md mb-2 font-bold text-xs md:text-sm text-center'>
            <p>TECHNICAL</p>
            <p>CO-SPONSOR</p>
          </div>
          <div className='flex items-center justify-center '>
            <img src={logos.LogoIEEE} className='h-12 md:h-20' alt="IEEE Logo" />
          </div>
        </div>

        <div className='w-full md:w-[40%] text-center'>
          <p className="text-red-600 font-bold text-base md:text-xl mt-2 md:mt-4">{conferenceInfo.date}</p>
          <p className="text-gray-500 text-sm md:text-base">({conferenceInfo.mode})</p>
        </div>

        <div className='w-full md:w-[30%] flex flex-col items-center justify-center rounded-md border-2 border-black p-2'>
          <div className='bg-blue-400 max-w-max px-3 py-1 md:p-2 rounded-md mb-2 font-bold text-xs md:text-sm text-center'>
            <p>COLLABORATION</p>
          </div>
          <div className='flex items-center justify-center '>
            <img src={logos.LogoACM} className='h-12 md:h-20' alt="ACM Logo" />
            <img src={logos.AITCM} className='h-12 md:h-20 ml-2 md:ml-4' alt="AIT CM Logo" />
          </div>
        </div>
      </div>

    </div>
    
    {/* Sticky Submit Paper Button - Always Visible */}
    <div className="fixed top-20 md:top-24 right-2 md:right-4 z-50">
      <a
        href={conferenceInfo.paperSubmissionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-200 hover:bg-blue-100 text-blue-700 font-semibold px-3 md:px-5 flex items-center py-2 md:py-3 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <LinkIcon className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" /> Submit Paper
      </a>
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

export default HeroSection;
