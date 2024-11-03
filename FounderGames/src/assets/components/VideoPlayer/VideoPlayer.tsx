// src/components/VideoPlayer/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  videoLink: string; // Expect videoLink as a prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink }) => {
  // Extract the video ID from the provided link
  const videoId = videoLink.split('v=')[1]?.split('&')[0]; // Get the video ID from the YouTube URL
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="flex flex-col items-center">
      {embedUrl ? ( // Check if embedUrl is valid
        <iframe
          width="100%"
          height="450" // Adjusted height for the video
          src={embedUrl} // Use the embed URL
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>Error loading video.</p> // Handle case where video ID is not available
      )}
    </div>
  );
};

export default VideoPlayer;
