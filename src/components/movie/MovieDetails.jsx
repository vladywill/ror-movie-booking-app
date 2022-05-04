import React from 'react';

const MovieDetails = () => (
  <div className="container mx-auto py-24 px-32 flex">
    <div className="w-3/5 bg-red-400 mr-10 h-96">
      <h1>Movie Poster</h1>
    </div>
    <div className="w-2/5 bg-white shadow-lg relative">
      <div className="bg-red-900 py-2">
        <h2 className="text-lg text-white text-center">Movie poster details</h2>
      </div>
      <div className="px-6">
        <div className="mb-3 mt-5 flex justify-between items-center">
          <span className="text-gray-500">Movie Title:</span>
          <span className="text-gray-600">Spiderman No Way Home</span>
        </div>
        <div className="mb-3 mt-5 flex justify-between items-center">
          <span className="text-gray-500">Launch date:</span>
          <span className="text-gray-600">May 6, 2022.</span>
        </div>
        <div className="mb-3 mt-5 flex justify-between items-center">
          <span className="text-gray-500">Ticket price:</span>
          <span className="text-gray-600">$150</span>
        </div>
        <div className="mb-3 mt-5 flex justify-between items-center">
          <span className="text-gray-500">Sales amount:</span>
          <span className="text-gray-600">$200</span>
        </div>
      </div>
      <button
        type="button"
        className="absolute bottom-0 right-0 my-4 mr-6 bg-red-600 px-12 py-2 text-lg text-white hover:bg-red-800"
      >
        Reserve
      </button>
    </div>
  </div>
);

export default MovieDetails;
