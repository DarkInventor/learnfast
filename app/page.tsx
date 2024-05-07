'use client'

// import { useChat } from 'ai/react'

// export default function Home() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat()
//   return (
//     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//       {messages.map(m => (
//         <div key={m.id} className="whitespace-pre-wrap">
//           {m.role === 'user' ? 'User: ' : 'AI: '}
//           {m.content}
//         </div>
//       ))}

//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   )
// }

// Final Version
import React, { useEffect } from 'react';
import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } = useChat();

  useEffect(() => {
    // Initialize the chat with a welcome message
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl lg:max-w-6xl shadow-2xl rounded-lg bg-white">
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg shadow">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Chatbot</h1>
        </div>
        <div className="flex flex-col p-6 space-y-4 overflow-y-auto h-screen md:h-auto md:max-h-96">
          {messages.map((m) => (
            <div key={m.id} className={`max-w-2xl px-4 py-2 rounded-2xl shadow ${m.role === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-200 mr-auto'}`}>
              <span>{m.content}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex p-6 border-t items-center bg-gray-50 rounded-b-lg">
          <input
            className="flex-1 p-4 mr-4 text-gray-700 border border-gray-300 rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send
          </button>
          {isLoading && (
            <button
              type="button"
              onClick={stop}
              className="ml-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl px-6 py-2 transition-colors duration-150"
            >
              Stop
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

