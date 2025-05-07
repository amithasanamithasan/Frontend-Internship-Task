

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">

      <div className="absolute top-0 left-2/2 -translate-x-2/2 w-full h-screen rounded-full bg-gradient-to-b from-cyan-400/30 to-transparent blur-3xl opacity-10"></div>
      
      <div className="absolute top-0 w-full h-full bg-black/40 pointer-events-none"></div>
      
    
      <div className="absolute top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/3 w-full lg:w-/5 
       aspect-square rounded-full bg-gradient-to-b from-white/40
        via-white/10 to-transparent"></div>
    </div>
  );
}