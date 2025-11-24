import React from 'react';
import { Calendar } from 'lucide-react';
import { importantDates } from '../../data/constants';

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

export default ImportantDatesTimeline;
