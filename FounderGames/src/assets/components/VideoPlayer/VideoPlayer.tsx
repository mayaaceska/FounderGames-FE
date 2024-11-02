// src/components/VideoPlayer/VideoPlayer.tsx
import React from 'react';
import VideoSummary from '../VideoSummary/VideoSummary';

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <iframe
        width="100%"
        height="450" // Adjusted height for the video
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with dynamic video URL
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="w-full"> {/* Full width to align with the video */}
        <VideoSummary /> {/* Use the VideoSummary component here */}
      </div>
    </div>
  );
};

export default VideoPlayer;

