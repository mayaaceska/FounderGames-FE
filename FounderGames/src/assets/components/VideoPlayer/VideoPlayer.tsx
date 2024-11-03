import React from 'react';

interface VideoPlayerProps {
  videoLink: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink }) => {
  const videoId = videoLink.split('v=')[1]?.split('&')[0]; 
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="flex flex-col items-center">
      {embedUrl ? ( 
        <iframe
          width="100%"
          height="450" 
          src={embedUrl} 
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <p>Error loading video.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
