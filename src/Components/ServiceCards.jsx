import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import icon1 from '../assets/images/Frame.png';
import icon2 from '../assets/images/Frame2.png';
import icon3 from '../assets/images/Frame3.png';
import icon4 from '../assets/images/Frame4.png';

const services = [
  {
    title: 'All-In-One (AIO) Service',
    description: 'Our AIO solution tailors to your unique vision, crafting a website that truly reflects...',
    icon: <img src={icon1} alt="AIO Service Icon" className="w-10 h-10" />,
    bgColor: 'bg-[#0F172A]', 
    borderColor: 'border-transparent',
    offset: 'mt-0'
  },
  {
    title: 'Project-Based Development',
    description: 'Ideal for agencies with ready designs, our service focuses on bringing...',
    icon: <img src={icon2} alt="Project Development Icon" className="w-10 h-10" />,
    bgColor: 'bg-gradient-to-br from-blue-900/90 via-cyan-800/80 to-indigo-900/90',
    borderColor: 'border-transparent',
    glowEffect: 'shadow-[0_0_15px_rgba(34,211,238,0.5)]',
    offset: 'mt-20'
  },
  {
    title: 'Scalable Dev Partnership',
    description: 'Our partnership is designed for businesses needing consistent development support...',
    icon: <img src={icon3} alt="Scalable Partnership Icon" className="w-10 h-10" />,
    bgColor: 'bg-[#0F172A]',
    borderColor: 'border-transparent',
    offset: 'mt-4'
  },
  {
    title: 'End-to-End Consulting',
    description: 'Our partnership is designed for businesses needing consistent development support...',
    icon: <img src={icon4} alt="Consulting Icon" className="w-10 h-10" />,
    bgColor: 'bg-[#1E293B]', 
    borderColor: 'border-transparent',
    offset: '-mt-10'
  },
];

const ServiceCard = () => {
  return (
    <div className="flex flex-wrap ml-10 py-10">
      {services.map((service, index) => (
        <div
          key={index}
          className={`w-[286px] h-[314px] rounded-xl border ${service.borderColor} overflow-hidden relative ${service.offset} ${service.bgColor}`}
        >
          <div className="p-2 flex flex-col h-full">
            {/* Icon */}
            <div className="mb-12">
              <div className={`p-2 rounded-lg inline-block `}>
                {service.icon}
              </div>
            </div>

            {/* Title and Arrow */}
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold text-white">
                {service.title}
              </h2>
              <FiArrowUpRight className="w-5 h-5 text-white" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;