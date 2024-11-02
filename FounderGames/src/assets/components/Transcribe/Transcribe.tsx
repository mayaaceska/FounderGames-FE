import React from 'react';

const Transcribe: React.FC = () => {
  const handleTimestampClick = (timestamp: string) => {
    // Here you would implement logic to jump to the timestamp in the video
    console.log(`Jump to timestamp: ${timestamp}`);
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Transcribe</h2>
      <div className="mt-2">
        {[
          { time: "0:05", text: "Intro" },
          { time: "1:15", text: "Cause" },
          { time: "2:30", text: "Effects" },
          { time: "3:50", text: "Conclusion" }
        ].map((item, index) => (
          <div key={index} className="flex justify-between py-1 cursor-pointer" onClick={() => handleTimestampClick(item.time)}>
            <span className="text-blue-600">{item.time}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcribe;
