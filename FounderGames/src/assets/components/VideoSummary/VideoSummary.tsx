// src/components/VideoSummary/VideoSummary.tsx
import React from 'react';

const VideoSummary: React.FC = () => {
  return (
    <div className="mt-2 p-4 bg-gray-100 rounded-md w-full"> {/* w-full to take full width */}
      <h2 className="text-lg font-semibold">Summary</h2>
      <p>This video covers various aspects of React development, including components, hooks, and best practices.</p>
    </div>
  );
};

export default VideoSummary;
