import React from 'react';
import card1 from '../assets/images/Mask group.png';
import card2 from '../assets/images/Mask group1.png';
import OpenButton from '../sheard/OpenButton';

const FavoriteCards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 md:px-10 lg:px-0 max-w-[1140px] mx-auto mt-16">
      {/* Card 1 */}
      <div className="bg-base-100 rounded-2xl w-full max-w-[554px]">
        <figure className="rounded-t-2xl overflow-hidden h-[300px] md:h-[350px] lg:h-[400px]">
          <img src={card1} alt="Mask group" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body mb-6">
          <OpenButton title="Alcohol Tracker" subtitle="All-In-One (AIO) Service" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-base-100 rounded-2xl w-full max-w-[554px]">
        <figure className="rounded-t-2xl overflow-hidden h-[300px] md:h-[350px] lg:h-[400px]">
          <img src={card2} alt="Mask group" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body mb-6">
          <OpenButton title="Rely" subtitle="All-In-One (AIO) Service" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCards;
