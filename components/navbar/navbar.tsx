import React from 'react';
import { CiSearch } from 'react-icons/ci'; // Import CiSearch icon from react-icons/ci

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white h-16 flex items-center justify-between pl-4 pr-0 sm:px-6 lg:px-8 relative">
      {/* Left Section (Circle and Name) */}
      <div className="flex items-center space-x-2">
        {/* Small Circle */}
        <div className="h-6 w-6 rounded-full bg-teal-400"></div>
        {/* Name */}
        <span className="text-teal-300 font-semibold">Your Name</span>
      </div>

      {/* Middle Section (Buttons) */}
      <div className="hidden md:flex flex-grow justify-center space-x-24">
        <button className="text-black">Browse</button>
        <button className="text-black">Trending</button>
        <button className="text-black">Contributes</button>
        <button className="text-black">Community</button>
      </div>

      {/* Right Section (Search Icon) */}
      <div className="absolute top-0 right-0 flex items-center justify-center h-16 w-16 bg-red-600">
        {/* Search icon */}
        <CiSearch className="text-white" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
