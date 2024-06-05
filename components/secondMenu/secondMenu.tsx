// secondMenu.tsx

import React from 'react';

const SecondMenu: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Container for the entire component */}
      <div className="relative m-5">
        {/* Heading "Latest" */}
        <div className='pt-5 text-left'>
          {/* Positioning the h2 element to the left */}
          <h2 className="text-2xl font-bold">Latest</h2>
        </div>

        {/* Flex container to display images in a row */}
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 mt-16">
          {/* First Image */}
          <div className="flex-1">
            <img
              src="/assets/Group 46.jpg"
              alt="Latest Image"
              className="w-360 h-240 object-cover"
            />
            <h3 className="text-xs font-bold mt-4 text-red-400">FRUIT</h3>
            <p className="text-black">Simple Juice Recipes to boost your immune system</p>
          </div>

          {/* Second Image */}
          <div className="flex-1">
            <img
              src="/assets/Group 46 (1).jpg"
              alt="Latest Image"
              className="w-360 h-240 object-cover"
            />
            <h3 className="text-xs font-bold mt-4 text-red-400">FRUIT</h3>
            <p className="text-black">Simple Juice Recipes to boost your immune system</p>
          </div>

          {/* Third Image */}
          <div className="flex-1">
            <img
              src="/assets/Group 46 (2).jpg"
              alt="Latest Image"
              className="w-360 h-240 object-cover"
            />
            <h3 className="text-xs font-bold mt-4 text-red-400">FRUIT</h3>
            <p className="text-black">Simple Juice Recipes to boost your immune system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondMenu;
