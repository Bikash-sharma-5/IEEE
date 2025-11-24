import React from 'react';
import { Star, Home, Building } from 'lucide-react';
import Section from '../common/Section';
import { aboutConferenceText, aboutAitText, aboutDepartmentText } from '../../data/constants';

const AboutSection = () => (
  <Section id="about" title="About The Conference, Institute & Department">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 text-gray-700 leading-relaxed text-left px-4">
      <div className="bg-gray-50 p-4 md:p-8 rounded-lg flex flex-col">
        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
          <Star className="text-blue-600 mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />About The Conference
        </h3>
        <p className="flex-grow text-sm md:text-base">{aboutConferenceText}</p>
      </div>
      <div className="bg-gray-50 p-4 md:p-8 rounded-lg flex flex-col">
        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
          <Home className="text-blue-600 mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />About AIT
        </h3>
        <p className="flex-grow text-sm md:text-base">{aboutAitText}</p>
      </div>
      <div className="bg-gray-50 p-4 md:p-8 rounded-lg flex flex-col">
        <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
          <Building className="text-blue-600 mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />About The Department
        </h3>
        <p className="flex-grow text-sm md:text-base">{aboutDepartmentText}</p>
      </div>
    </div>
  </Section>
);

export default AboutSection;
