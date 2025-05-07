import React from 'react';

const RecentWorksHeader = ({ 
  title = 'Our Most Recent Works', 
  subtitle = 'Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.' 
}) => {
  return (
    <div className="mx-auto py-12 flex flex-col items-center justify-center px-4">
      {/* Main Title */}
      <h2
        className="font-bold mb-4 text-center text-gray-300"
        style={{
          fontSize: '2.25rem', 
          lineHeight: '120%',
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p
        className="text-center font-normal text-gray-300"
        style={{
          width: '100%',
          maxWidth: '500px', 
          fontSize: '1.125rem', 
          lineHeight: '120%',
          letterSpacing: '0%',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default RecentWorksHeader;
