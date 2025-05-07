import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white px-4 sm:px-6 lg:px-[100px] py-8 md:py-16 w-full">
    
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
     
        <div className="flex flex-col gap-4 md:gap-6">
          <div>
            <p className="text-xs sm:text-sm text-gray-300">Have a project in mind?</p>
            <h2 
              className="text-4xl sm:text-5xl md:text-[64px] leading-[120%] font-bold" 
              style={{ fontFamily: '"Rethink Sans", sans-serif' }}
            >
              <span className="text-[#72b8f0]">Let's Talk</span>
            </h2>
          </div>
          <a
            href="mailto:hey@pixll.com"
            className="underline text-white"
            style={{
              fontFamily: '"Rethink Sans", sans-serif',
              textDecorationThickness: '1px',
            }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-normal md:leading-[77px]">
              hey@pixll.com
            </span>
          </a>
        </div>

       
        <div className="flex flex-col gap-1 sm:gap-2 text-left lg:text-right text-xs sm:text-sm text-gray-300 mt-4 lg:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>

     
      <div className="max-w-[1440px] mx-auto w-full flex justify-end mt-8 md:mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full sm:w-[358px] text-xs sm:text-sm text-gray-500">
          <div className="flex gap-3 sm:gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
          <p>© 2017 – 2025 Pixll</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;