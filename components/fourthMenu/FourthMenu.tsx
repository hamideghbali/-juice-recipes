// components/fourthMenu/fourthMenu.tsx

import React from "react";

const FourthMenu: React.FC = () => {
  return (
    <div className="relative mt-20">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row">
        {/* First Image with Text Overlay */}
        <div className="relative lg:w-2/3">
          <img
            src="/assets/image 9.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Text Content Overlay */}
          <div className="absolute top-0 left-0 pt-20 pl-4 text-white">
            {/* Multi-line Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-black leading-tight lg:leading-snug lg:max-w-xl">
              Fruit Combination for<br className="lg:hidden" /> Daily Juice
            </h1>
            <div className="flex items-center gap-2 my-6">
              <div className="h-6 w-6 rounded-full bg-teal-400"></div>
              <span className="text-black font-semibold">Your Name</span>
            </div>
            {/* Fixed Four-line Paragraph */}
            <p className="mt-2 text-gray-500 text-wrap w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="lg:w-1/3 lg:ml-4 mt-4 lg:mt-0">
          <img
            src="/assets/Writers.jpg"
            alt=""
            className="w-62 lg:w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthMenu;
