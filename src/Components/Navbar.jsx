import React from "react";
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
   <nav className="fixed top-0 left-1/2  transform -translate-x-1/2  py-10 w-full sm:w-[calc(100%-64px)] md:w-[calc(100%-128px)] lg:w-[1140px] h-[70px] md:h-[90px] backdrop-blur-[20px] bg-white/20 border border-[#0A0A0A]/10 rounded-[80px] px-4 sm:px-6 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="w-[100px] md:w-auto">
        <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
      </div>
      
      {/* Navigation Links - hidden on mobile, visible on md+ */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <a href="#" className="text-[#FFFFFF] hover:opacity-80 transition text-sm lg:text-base">Work</a>
        <a href="#" className="text-[#FFFFFF] hover:opacity-80 transition text-sm lg:text-base">About</a>
        <a href="#" className="text-[#FFFFFF] hover:opacity-80 transition text-sm lg:text-base">Blog</a>
        <a href="#" className="text-[#FFFFFF] hover:opacity-80 transition text-sm lg:text-base">Contact</a>
      </div>

      {/* Mobile menu button - visible on mobile only */}
      <button 
        className="md:hidden text-[#0A0A0A]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-[20px] rounded-2xl p-4 mt-2 shadow-lg transition-all duration-300 ease-in-out transform opacity-100">
          <a href="#" className="block py-2 text-[#1a1818]">Work</a>
          <a href="#" className="block py-2 text-[#1a1818]">About</a>
          <a href="#" className="block py-2 text-[#1a1818]">Blog</a>
          <a href="#" className="block py-2 text-[#1a1818]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
