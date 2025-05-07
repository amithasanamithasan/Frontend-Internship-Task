import React from 'react';

const StudioDescription = () => {
  return (
    <div className="relative w-full max-w-screen-lg mx-auto py-10 px-4">
  
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="font-medium text-center text-gray-600 sm:text-2xl md:text-3xl lg:text-4xl"
          style={{
            fontFamily: "'Rethink Sans', sans-serif",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          We are a full-service studio creating transformative{" "}
          <span className="font-semibold text-white">digital experiences and solutions.</span>{" "}
          <span className="text-gray-600">specializing in</span>{" "}
          <span className="font-semibold text-white">websites and web applications.</span>
        </h2>
      </div>
    </div>
  );
};

export default StudioDescription;
