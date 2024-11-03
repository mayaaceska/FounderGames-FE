// src/components/VideoSummary/VideoSummary.tsx
import React from 'react';

interface VideoSummaryProps {
  summary: string; // Accept summary as a prop
}

const VideoSummary: React.FC<VideoSummaryProps> = ({ summary }) => {
  return (
    <div className="mt-2 p-4 bg-gray-100 rounded-md w-full"> {/* w-full to take full width */}
      <h2 className="text-lg font-semibold">Summary</h2>
      <p>{summary || 'No summary available.'}</p> {/* Display summary or a default message */}
    </div>
  );
};

export default VideoSummary;
