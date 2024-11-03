import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Transcribe: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [transcription, setTranscription] = useState<{ time: string; text: string }[]>([]);

  useEffect(() => {
    const fetchTranscriptionData = async () => {
      try {
        const response = await fetch(`https://ae6d-92-53-25-116.ngrok-free.app/api/transcriptions/${videoId}`, {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const keyPointsArray = data.transcription.keypoints;

          
          if (Array.isArray(keyPointsArray) && keyPointsArray.length > 0) {
            const parsedKeyPoints = keyPointsArray.map((item: any) => ({
              time: item.time.replace(" seconds", ""), 
              text: item.Keyword,
            }));
            setTranscription(parsedKeyPoints);
          } else {
            console.error('Invalid key points format:', keyPointsArray);
            setTranscription([]);
          }
        }
      } catch (error) {
        console.error('Error fetching transcription data:', error);
      }
    };

    fetchTranscriptionData();
  }, [videoId]);

  const handleTimestampClick = (timestamp: string) => {
    console.log(`Jump to timestamp: ${timestamp}`);
    
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Transcription Key Points</h2>
      <div className="mt-2">
        {transcription.length > 0 ? (
          <div className="flex flex-col">
            {transcription.map((item, index) => (
              <div key={index} className="flex justify-between py-1 cursor-pointer" onClick={() => handleTimestampClick(item.time)}>
                <span className="text-blue-600">{item.time} seconds</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No transcription available.</p>
        )}
      </div>
    </div>
  );
};

export default Transcribe;
