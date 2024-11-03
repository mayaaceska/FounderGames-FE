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
        const response = await fetch(`https://ae6d-92-53-25-116.ngrok-free.app/api/transcriptions/${encodeURIComponent(query)}`, {
            method: "GET",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          });

        if (response.ok) {
          const data = await response.json();

          console.log('Fetched data:', data);

          const transcription = data.transcription;

          if (transcription && transcription.id && transcription.title && transcription.video_url) {
            const video: Video = {
              id: transcription.id,
              title: transcription.title,
              url: transcription.video_url,
              summary: transcription.summary,
            };
            setVideos([video]);
          } else {
            console.error('Invalid video data structure:', transcription);
            setVideos([]);
          }
        } else {
          console.error('Failed to fetch video');
          setVideos([]);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        setVideos([]);
      }
    };

    if (query) fetchVideoById();
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
                thumbnailUrl="https://via.placeholder.com/150" 
                summary={video.summary} 
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
