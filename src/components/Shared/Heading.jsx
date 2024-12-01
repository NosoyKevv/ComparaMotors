import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-4">
      <h1 className="text-5xl font-extrabold lg:text-6xl text-gray-900 dark:text-white">{title}</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Heading;
