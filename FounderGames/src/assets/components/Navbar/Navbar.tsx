import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo Section */}
        <div>
          <a href="/" className="text-2xl font-bold text-blue-600">
            Founder Games
          </a>
        </div>

        {/* Search Section */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
