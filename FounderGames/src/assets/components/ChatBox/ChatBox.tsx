import React, { useState } from 'react';

interface ChatBoxProps {
  videoId: string | undefined; 
}

const ChatBox: React.FC<ChatBoxProps> = ({ videoId }) => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSend = async () => {
    if (query.trim() && videoId) { 
      try {
        const res = await fetch(`/api/ask-question`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId, query }),
        });
        if (res.ok) {
          const data = await res.json();
          setResponse(data.answer); 
        } else {
          setResponse("Error: Unable to fetch answer.");
        }
      } catch (error) {
        console.error("Error fetching response:", error);
        setResponse("Error: Unable to fetch answer.");
      }
      setQuery(''); 
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4">
      <div className="bg-white shadow-lg rounded-lg flex items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here..."
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white rounded-r-md px-4 py-2 hover:bg-blue-700 transition"
          style={{ flexShrink: 0 }}
        >
          Ask
        </button>
      </div>
      {response && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-sm font-semibold text-gray-700">Response:</p>
          <p className="text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
