// src/assets/pages/SingleVideoPage/SingleVideoPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Transcribe from '../../components/Transcribe/Transcribe';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import ChatBox from '../../components/ChatBox/ChatBox';

const SingleVideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [videoData, setVideoData] = useState<{ link: string; title: string } | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`/api/videos/${videoId}`);
        if (response.ok) {
          const data = await response.json();
          setVideoData(data);
        }
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (!videoData) {
    return <p>Loading video...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="pt-32 flex justify-between p-4">
        <div className="flex-1 mr-4">
          <VideoPlayer videoLink={videoData.link} />
        </div>
        <div className="flex-1 ml-4">
          <Transcribe />
        </div>
      </div>
      <ChatBox videoId={videoId} /> {/* Add ChatBox with videoId as prop */}
    </div>
  );
};

export default SingleVideoPage;
