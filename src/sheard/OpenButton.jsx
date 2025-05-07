import { ArrowRight } from 'lucide-react';

function OpenButton({ title = 'Alcohol Tracker', subtitle = 'All-In-One (AIO) Service' }) {
  return (
    
         <div className="flex items-center gap-4">
      <div>
        <h1 className="text-white font-bold text-lg">{title}</h1>
        <p className="text-gray-300">{subtitle}</p>
      </div>
      <button className="flex items-end  gap-3 px-5 
      py-2 bg-neutral-800 text-white rounded-full
        hover:bg-neutral-700 transition ease-in-out duration-300">
        Open
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
    
   
  );
}

export default OpenButton;
