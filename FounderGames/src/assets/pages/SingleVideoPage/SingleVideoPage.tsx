// src/assets/pages/SingleVideoPage/SingleVideoPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Transcribe from '../../components/Transcribe/Transcribe';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import ChatBox from '../../components/ChatBox/ChatBox';
import VideoSummary from '../../components/VideoSummary/VideoSummary'; // Import VideoSummary

interface VideoData {
  id: number;
  title: string;
  video_url: string;
  summary: string;
}

const SingleVideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch(`https://7edd-92-53-25-116.ngrok-free.app/api/transcriptions/${videoId}`, {
            method: "GET",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          });
          
        if (response.ok) {
          const data = await response.json();
          const transcription = data.transcription;

          if (transcription && transcription.id && transcription.title && transcription.video_url) {
            const video: VideoData = {
              id: transcription.id,
              title: transcription.title,
              video_url: transcription.video_url,
              summary: transcription.summary, // Assuming this holds the summary
            };
            setVideoData(video);
          } else {
            console.error('Invalid video data structure:', transcription);
            setVideoData(null);
          }
        } else {
          console.error('Failed to fetch video data');
          setVideoData(null);
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
          <VideoPlayer videoLink={videoData.video_url} />
        </div>
        <div className="flex-1 ml-4">
          <Transcribe />
        </div>
      </div>
      <VideoSummary summary={videoData.summary} /> {/* Pass the summary to VideoSummary */}
      <ChatBox videoId={videoId} />
    </div>
  );
};

export default SingleVideoPage;
