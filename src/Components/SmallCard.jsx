import React from 'react';
import img1 from '../assets/images/cad3.png';
import img2 from '../assets/images/card4.png';
import img3 from '../assets/images/card5.png';
import OpenButton from '../sheard/OpenButton';
import ViewMoreButton from './ViewMoreButton';

const SmallCard = () => {
  return (
    <div className="relative max-w-[1140px] mx-auto px-4 md:px-6 lg:px-0 mt-10">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 w-full">
          <figure className="px-6 pt-6">
            <img src={img1} alt="Card 3" className="rounded-xl w-full h-auto object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <OpenButton title="Alcohol App" subtitle="Project Based" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-full">
          <figure className="px-6 pt-6">
            <img src={img2} alt="Card 4" className="rounded-xl w-full h-auto object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <OpenButton title="Finance Website" subtitle="All-In-One (AIO) Service" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-full">
          <figure className="px-6 pt-6">
            <img src={img3} alt="Card 5" className="rounded-xl w-full h-auto object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <OpenButton title="Dashboard App" subtitle="Scalable Dev Partnership" />
          </div>
        </div>
      </div>

     
      <div className="flex justify-center mt-10">
        <ViewMoreButton />
      </div>
    </div>
  );
};

export default SmallCard;
