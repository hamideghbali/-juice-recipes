import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FirstMenu: React.FC = () => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      {/* Use the imported image */}
      <img
        src="/assets/image 1.jpg"
        alt="My Image"
        className="w-full h-full object-cover"
      />

      {/* Main container */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ textAlign: 'center' }}
      >
        {/* Container div with button, paragraph, and icon */}
        <div
          className="bg-sky-100 flex flex-row items-center justify-between p-4 rounded-lg"
          style={{ 
            width: '70%', 
            maxWidth: '500px', 
            marginLeft: 'auto', // Move to the right
            marginRight: '10%' // Additional right margin for spacing
          }}
        >
          {/* Button with white background and blue text */}
          <button
            className="bg-white text-teal-600 px-2 py-1 md:px-3 md:py-1.5 sm:px-2 sm:py-1 cursor-pointer whitespace-nowrap"
          >
            New Recipe
          </button>

          {/* Paragraph with text */}
          <p className="text-teal-600 text-sm md:text-xs sm:text-xs whitespace-nowrap">
            Delicious fruit juice combinations
          </p>

          {/* Arrow-right icon */}
          <FaArrowRight className="text-teal-600 text-lg md:text-md sm:text-sm" />
        </div>

        {/* Additional content (h1) positioned below the main content */}
        <div style={{ marginTop: '1rem' }}>
          <h1 className="text-black text-3xl font-bold">
            Simple and Tasty Juice Recipes
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstMenu;

