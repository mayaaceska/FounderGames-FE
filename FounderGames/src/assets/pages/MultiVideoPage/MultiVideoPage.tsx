// import Navbar from "../../components/Navbar/Navbar";

// const MultiVideoPage = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// };

// export default MultiVideoPage;

import React from 'react';
import { useLocation } from 'react-router-dom';

const MultiVideoPage: React.FC = () => {
  const location = useLocation();
  const { query } = location.state || { query: '' }; // Get the search query from the state

  // Dummy data to represent search results
  const dummyData = [
    { id: 1, title: 'Video 1: Introduction to React', url: 'https://www.youtube.com/watch?v=1' },
    { id: 2, title: 'Video 2: React Hooks Explained', url: 'https://www.youtube.com/watch?v=2' },
    { id: 3, title: 'Video 3: Building a React App', url: 'https://www.youtube.com/watch?v=3' },
  ];

  // Filter dummy data based on the query (case-insensitive)
  const filteredVideos = dummyData.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for: {query}</h1>
      <ul className="space-y-2">
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => (
            <li key={video.id} className="border-b py-2">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {video.title}
              </a>
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default MultiVideoPage;
