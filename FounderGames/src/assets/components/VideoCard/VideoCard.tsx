// src/components/VideoCard/VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  summary?: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, thumbnailUrl, summary, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer border rounded-lg overflow-hidden shadow-lg">
      <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {summary && <p className="text-sm text-gray-600">{summary}</p>}
      </div>
    </div>
  );
};

export default VideoCard;
