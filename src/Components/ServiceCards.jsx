import React from 'react';
import frame from '../assets/images/Frame.png';
import frame1 from '../assets/images/Vector.png';

const ServiceCard = () => {
  return (
    <div 
      className="w-[286px] h-[314px] mt-[49px] rounded-[16px] border border-opacity-20 border-gray-400 shadow-sm overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Card Container */}
      <div className="w-[238px] h-[266px] mt-[24px] mx-[24px] flex flex-col gap-[64px]">
        
        {/* Top Section with Icon */}
        <div className="w-[238px] h-[58px] flex justify-between items-center">
          <div className="p-2 rounded-lg">
            <img className="w-6 h-6" src={frame} alt="Service icon" />
          </div>
 
        </div>
        
        {/* Content Section */}
        <div className="w-[238px] h-[72px]">
          <div className="flex items-center gap-10">
            <h2 className="font-rethink-sans font-normal text-[16px] leading-[150%] text-white">
              All-In-One (AIO) Service
            </h2>
            <img className="w-4 h-4" src={frame1} alt="Badge icon" />
          </div>
          <p className="font-rethink-sans py-5 font-normal text-[16px] leading-[150%] text-gray-300 mt-2">
            Our AIO solution tailors to your unique vision, crafting a website that truly reflects...
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ServiceCard;