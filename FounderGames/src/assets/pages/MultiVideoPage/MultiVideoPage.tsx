// src/assets/pages/MultiVideoPage/MultiVideoPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import VideoCard from '../../components/VideoCard/VideoCard';

interface Video {
  id: number;
  title: string;
  url: string;
}

const MultiVideoPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query } = location.state || { query: '' };
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`/api/search-videos?query=${encodeURIComponent(query)}`);
        if (response.ok) {
          const data = await response.json();
          setVideos(data); // Assuming `data` is an array of video objects
        } else {
          console.error('Failed to fetch videos');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (query) fetchVideos();
  }, [query]);

  const handleCardClick = (videoId: number) => {
    navigate(`/single-video/${videoId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 pt-32">
        <h1 className="text-2xl font-bold mb-4">
          {videos.length} related results for: "{query}"
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.length > 0 ? (
            videos.map(video => (
              <VideoCard
                key={video.id}
                videoId={video.id.toString()}
                title={video.title}
                thumbnailUrl="https://via.placeholder.com/150"
                onClick={() => handleCardClick(video.id)}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiVideoPage;
