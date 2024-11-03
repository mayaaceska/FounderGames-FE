import React from 'react';

interface VideoSummaryProps {
  summary: string;
}

const VideoSummary: React.FC<VideoSummaryProps> = ({ summary }) => {
  return (
    <div className="mt-2 p-4 bg-gray-100 rounded-md w-full"> 
      <h2 className="text-lg font-semibold">Summary</h2>
      <p>{summary || 'No summary available.'}</p>
    </div>
  );
};

export default VideoSummary;
