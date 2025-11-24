import React from 'react';
import Section from '../common/Section';
import { useOnScreen } from '../../hooks/useOnScreen';
import { armyImages } from '../../data/constants';

const BrochureUnveilingSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <Section id="brochure-unveiling" title="Unveiling of IEEE Conference Brochure" className="bg-gray-50">
      <div 
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <img
            src={armyImages.ARMYIMG_TOP}
            alt="Unveiling of IEEE Conference Brochure"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default BrochureUnveilingSection;
