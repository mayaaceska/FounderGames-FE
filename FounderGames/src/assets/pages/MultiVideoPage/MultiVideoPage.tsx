// src/assets/pages/MultiVideoPage/MultiVideoPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import VideoCard from '../../components/VideoCard/VideoCard';

interface Video {
  id: number;
  title: string;
  url: string;
  summary: string;
}

const MultiVideoPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query } = location.state || { query: '' };
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideoById = async () => {
      try {
        const response = await fetch(`https://7edd-92-53-25-116.ngrok-free.app/api/transcriptions/${encodeURIComponent(query)}`, {
            method: "GET",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          });

        if (response.ok) {
          const data = await response.json();

          // Log the fetched data to check its structure
          console.log('Fetched data:', data);

          // Access the transcription object
          const transcription = data.transcription;

          // Check if transcription has the expected properties
          if (transcription && transcription.id && transcription.title && transcription.video_url) {
            const video: Video = {
              id: transcription.id,
              title: transcription.title,
              url: transcription.video_url,
              summary: transcription.summary, // You can adjust this based on what summary you want
            };
            setVideos([video]); // Set videos to an array with a single video object
          } else {
            console.error('Invalid video data structure:', transcription);
            setVideos([]); // Clear videos if structure is not as expected
          }
        } else {
          console.error('Failed to fetch video');
          setVideos([]); // Clear videos if not found
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        setVideos([]); // Clear videos in case of error
      }
    };

    if (query) fetchVideoById(); // Only fetch if there is a query (ID)
  }, [query]);

  const handleCardClick = (videoId: number) => {
    navigate(`/single-video/${videoId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 pt-32">
        <h1 className="text-2xl font-bold mb-4">
          {videos.length > 0 ? `1 result for ID: "${query}"` : `No results found for ID: "${query}"`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.length > 0 ? (
            videos.map(video => (
              <VideoCard
                key={video.id}
                videoId={video.id.toString()}
                title={video.title}
                thumbnailUrl="https://via.placeholder.com/150" // Replace with actual thumbnail if available
                summary={video.summary} // Display the summary if needed in the VideoCard
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
