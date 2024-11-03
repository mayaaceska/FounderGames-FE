import React from 'react';

interface VideoCardProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, thumbnailUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden w-full hover:shadow-lg transition-shadow duration-200"
    >
      <img src={thumbnailUrl} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
