"use client";

// Final Version
import React, { useEffect, useState } from "react";
import { useChat } from "ai/react";
import { start } from "repl";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

// export const maxDuration = 300;

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading } =
    useChat();

  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  useEffect(() => {
    // Simply toggle the state to show the welcome message without altering the useChat messages.
    setShowWelcomeMessage(true);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full  items-center justify-center min-h-screen bg-gray-100">
      {/* <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4"> */}
      {/* <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <a href="#" className="text-white text-xl md:text-2xl font-bold">
            My Awesome Chatbot
          </a>
     
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
  
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-800 rounded-lg border border-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition duration-300 block py-2 pr-4 pl-3 md:p-0">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition duration-300 block py-2 pr-4 pl-3 md:p-0">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition duration-300 block py-2 pr-4 pl-3 md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition duration-300 block py-2 pr-4 pl-3 md:p-0">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Nav />
      <Hero />

      <div className="flex flex-col items-center w-full px-4">
        <div className="w-full max-w-4xl lg:max-w-6xl sm:max-w-2xl md:max-w-2xl shadow-2xl rounded-lg bg-white">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg shadow">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
              Chatbot
            </h1>
          </div>
          <div className="flex flex-col p-6 space-y-4 overflow-y-auto h-96 md:h-auto md:max-h-96 text-black">
            {showWelcomeMessage && (
              <div className="max-w-2xl px-4 py-2 rounded-2xl shadow bg-gray-200 mr-auto text-black">
                <span>Hii</span>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-full px-4 py-2 rounded-2xl shadow ${
                  m.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                <span>{m.content}</span>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex p-6 border-t items-center bg-gray-50 rounded-b-lg w-full flex-wrap"
          >
            <input
              className="flex-1 p-2 mr-4 text-gray-700 border border-gray-300 rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-auto bg-white"
              value={input}
              placeholder="Type your message..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-2xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2 w-full md:w-auto md:mt-0"
            >
              Send
            </button>
            {isLoading && (
              <button
                type="button"
                onClick={stop}
                className="ml-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl px-6 py-2 transition-colors duration-150 mt-2 w-full md:w-auto md:mt-0"
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
