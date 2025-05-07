import { ArrowRight } from 'lucide-react';

function ViewMoreButton() {
  return (
    <button
      className="flex items-center justify-center gap-2 px-5 py-2.5 
                 bg-gradient-to-r from-blue-500 to-blue-700 
                 text-sm md:text-base text-white 
                 rounded-full shadow-md 
                 hover:shadow-lg hover:scale-105 
                 transition duration-300 ease-in-out"
    >
      View more
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

export default ViewMoreButton;
