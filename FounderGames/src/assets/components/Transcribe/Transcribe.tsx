import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Transcribe: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [transcription, setTranscription] = useState<{ time: string; text: string }[]>([]);

  useEffect(() => {
    const fetchTranscriptionData = async () => {
      try {
        const response = await fetch(`https://7edd-92-53-25-116.ngrok-free.app/api/transcriptions/${videoId}`, {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const keypointsString = data.transcription.keypoints;

          // Parse keypoints string into an array of objects
          const keypointsArray = keypointsString.split('\n').map((line: string) => {
            const match = line.match(/(\d+\.\s+.*?):\s*(\d+\.\d+)\s*seconds/); // Regex to match "1. Intro: 0.00 seconds"
            if (match) {
              const text = match[1]; // "1. Intro"
              const time = match[2]; // "0.00"
              return {
                time: time,
                text: text,
              };
            }
            return null; // Ignore lines that don't match
          }).filter((item): item is { time: string; text: string } => item !== null); // Filter out null values and ensure type safety

          setTranscription(keypointsArray);
        }
      } catch (error) {
        console.error('Error fetching transcription data:', error);
      }
    };

    fetchTranscriptionData();
  }, [videoId]);

  const handleTimestampClick = (timestamp: string) => {
    console.log(`Jump to timestamp: ${timestamp}`);
    // Implement your logic here, such as using the video player's API to seek to the specific time
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Transcribe</h2>
      <div className="mt-2">
        {transcription.length > 0 ? (
          <div className="flex flex-col">
            {transcription.map((item, index) => (
              <div key={index} className="flex justify-between py-1 cursor-pointer" onClick={() => handleTimestampClick(item.time)}>
                <span className="text-blue-600">{item.time} seconds</span> {/* Displaying time with "seconds" */}
                <span>{item.text}</span> {/* Displaying text */}
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
