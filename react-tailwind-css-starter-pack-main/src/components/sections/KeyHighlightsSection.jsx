import React from 'react';
import { Star } from 'lucide-react';
import Section from '../common/Section';
import { keyHighlights, centeredHighlight } from '../../data/constants';

const KeyHighlightsSection = () => (
  <Section id="highlights" title="Key Highlights" className="bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {keyHighlights.map((highlight, index) => (
          <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
            <Star className="w-5 h-5 text-yellow-500 mt-1 mr-4 flex-shrink-0" />
            <p className="text-gray-700">{highlight}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm w-full md:w-2/3 lg:w-1/2">
          <Star className="w-5 h-5 text-yellow-500 mr-4 flex-shrink-0" />
          <p className="text-gray-700 text-lg">{centeredHighlight}</p>
        </div>
      </div>
    </div>
  </Section>
);

export default KeyHighlightsSection;
