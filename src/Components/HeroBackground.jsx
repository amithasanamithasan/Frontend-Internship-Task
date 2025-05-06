

export default function HeroBackground() {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
        {/* Blue Arc Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-cyan-400/30 to-transparent blur-3xl opacity-60"></div>
  
        {/* Optional radial overlay for depth */}
        <div className="absolute top-0 w-full h-full bg-gradient-radial from-transparent via-cyan-800/10 to-black/90 pointer-events-none"></div>
      </div>
    );
  }
  