import React, { useState } from 'react';
import RecentWorksHeader from './RecentWorksHeader';

const FeaturedInsights = () => {
  const insights = [
    "01 How to Protect Your Identity While Traveling",
    "02 Tips for Safe Online Shopping",
    "03 Keeping Your Data Secure on Public Wi-Fi",
    "04 Protecting Personal Information on Social Media",
    "05 How to Safeguard Your Financial Accounts",
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-16">
      <RecentWorksHeader
        title="Featured Insights"
        subtitle="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
      />

      <div className="max-w-[1140px] mx-auto space-y-4 mt-10">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border border-base-300 rounded-lg shadow-lg bg-black"
          >
            <input
              type="checkbox"
              checked={openIndex === index}
              onChange={() => toggleCollapse(index)}
              className="hidden"
            />
            <div
              className="collapse-title font-semibold text-base md:text-lg cursor-pointer p-4 text-white"
              onClick={() => toggleCollapse(index)}
            >
              {insight}
            </div>
            {openIndex === index && (
              <div className="collapse-content text-sm md:text-base p-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;
