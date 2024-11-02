import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YouTubeLinkForm: React.FC = () => {
  const [link, setLink] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Regular expression to validate YouTube links
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

    if (!youtubeRegex.test(link)) {
      setError("The link is not in our database. Please post a YouTube link.");
    } else {
      setError(''); // Clear any previous error messages
      navigate('/single-video'); // Navigate to the single video page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-11/12 md:w-3/4 lg:w-1/2"> {/* Container for form, responsive width */}
        <h2 className="text-2xl font-semibold mb-10 text-center">
        Please enter a YouTube link in the field below. Upon submission, our system will summarize and transcribe the content for you.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center"> {/* Flex container for input and button */}
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
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
};

export default YouTubeLinkForm;

