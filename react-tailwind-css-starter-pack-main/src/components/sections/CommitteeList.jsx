import React from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

const CommitteeList = ({ title, members }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
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

export default CommitteeList;
