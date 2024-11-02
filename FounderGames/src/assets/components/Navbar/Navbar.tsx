// import React from 'react';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="w-full bg-white shadow-md fixed">
//       <div className="flex justify-between items-center px-4 py-4">
//         {/* Logo Section */}
//         <div>
//           <a href="/" className="text-2xl font-bold text-blue-600">
//             Founder Games
//           </a>
//         </div>

//         {/* Search Section */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700 transition">
//             Search
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirect to MultiVideoPage with search query as state (you can use it there)
    navigate('/multi-video', { state: { query: searchQuery } });
    setSearchQuery(''); // Clear the input field after search
  };

  return (
    <nav className="w-full bg-white shadow-md fixed">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo Section */}
        <div>
          <a href="/" className="text-2xl font-bold text-blue-600">
            Founder Games
          </a>
        </div>

        {/* Search Section */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700 transition">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
