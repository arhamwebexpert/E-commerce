import React from 'react';

const ExampleCarouselImage = ({ image, altText }) => {
  return (
    <div class="bg-purple-300">
      <img src={image} alt={altText} className="object-none h-96 w-full " />
    </div>
  );
};

export default ExampleCarouselImage ;
