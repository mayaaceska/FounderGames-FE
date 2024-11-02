import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSend = () => {
    if (query.trim()) {
      // Here you would handle sending the query, e.g., API call or state update
      console.log('Sending query:', query);
      setQuery(''); // Clear the input after sending
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4">
      <div className="bg-white shadow-lg rounded-lg flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ width: '90%' }} // Set width of input to 90%
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700 transition"
          style={{ flexShrink: 0 }} // Prevent button from shrinking
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default ChatBox;

