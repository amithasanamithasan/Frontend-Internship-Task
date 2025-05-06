import React from 'react';
import img1 from '../assets/images/image.png';
import img2 from '../assets/images/image1.png';
import img3 from '../assets/images/image2.png';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-cyan-400/30 to-transparent blur-3xl opacity-60"></div>
      <div className="absolute top-0 w-full h-full bg-gradient-radial from-transparent via-cyan-800/10 to-black/90 pointer-events-none"></div>
    </div>
  );
};

const PortfolioSection = () => {
  const portfolioItems = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 }
  ];

  return (
    <section className="relative w-full max-w-screen-2xl mx-auto" style={{ maxWidth: "1440px", height: "342px" }}>
      <HeroBackground />
      
      <div className="relative z-10 flex overflow-x-auto pl-12 overflow-y-hidden h-full gap-6 px-4 py-2 scrollbar-hide">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 relative"
            style={{
              width: "400px",
              height: "306px",
              marginTop: "12px"
            }}
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden border-[5px] border-white/20 bg-white/10 backdrop-blur-sm shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover"
                style={{
                  width: "457px",
                  height: "306px"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;