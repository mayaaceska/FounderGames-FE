import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YouTubeLinkForm: React.FC = () => {
  const [link, setLink] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Regular expression to validate YouTube links
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

    if (!youtubeRegex.test(link)) {
      setError("The link is not in our database. Please post a YouTube link.");
      return;
    }

    try {
      setError(''); // Clear any previous error messages

      // Send the link to the backend to get or create a unique video ID
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link }),
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve video ID from the server');
      }

      const data = await response.json();
      const videoId = data.videoId; // Assuming the backend returns { videoId: 'unique-id' }

      // Navigate to the single video page with the video ID
      navigate(`/single-video/${videoId}`);
    } catch (error) {
      console.error(error);
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-11/12 md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          Please enter a YouTube link in the field below. Upon submission, our system will summarize and transcribe the content for you.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Paste your YouTube link here"
              className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default YouTubeLinkForm;


