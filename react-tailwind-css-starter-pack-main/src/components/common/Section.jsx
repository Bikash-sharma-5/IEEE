import React from 'react';

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-8 md:py-16 lg:py-20 scroll-mt-20 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default Section;
