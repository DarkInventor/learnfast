'use client'

// Final Version
import React, { useEffect, useState } from 'react';
import { useChat } from 'ai/react';
import { start } from 'repl';

// export const maxDuration = 300;

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } = useChat();

  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    // Simply toggle the state to show the welcome message without altering the useChat messages.
    setShowWelcomeMessage(true);
  }, []);


  return (
<div className="absolute top-0 left-0 w-full  items-center justify-center min-h-screen p-4 bg-gray-100"> 
   

    <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <a href="#" className="text-white text-xl md:text-2xl font-bold">
          My Awesome Chatbot
        </a>
        {/* You can add more navigation items here */}
      </div>
    </nav>

<div className="flex lg:flex-col items-center">
      <div className="w-full max-w-4xl lg:max-w-6xl shadow-2xl rounded-lg bg-white">
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Chatbot</h1>
        </div>
        <div className="flex flex-col p-6 space-y-4 overflow-y-auto md:h-auto md:max-h-96 h-96">
        {showWelcomeMessage && (
            <div className="max-w-2xl px-4 py-2 rounded-2xl shadow bg-gray-200 mr-auto">
              <span>Hii</span>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={`max-w-2xl px-4 py-2 rounded-2xl shadow ${m.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 mr-auto'}`}>
              <span>{m.content}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex p-6 border-t items-center bg-gray-50 rounded-b-lg flex-wrap">
          <input
            className="flex-1 p-2 mr-4 text-gray-700 border border-gray-300 rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500 w:full md:w-auto "
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 lg:mt-0 md:mt-0"
          >
            Send
          </button>
          {isLoading && (
            <button
              type="button"
              onClick={stop}
              className="ml-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl px-6 py-2 transition-colors duration-150 mt-4 lg:mt-0 md:mt-0"
            >
              Stop
            </button>
          )}
        </form>
      </div>
    </div>
    </div>
  );
}

