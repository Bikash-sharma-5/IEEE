import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full ${className}`}>
    {children}
  </div>
);

export default Card;
