import React from 'react';

const MovieDetails = () => (
  <div className="container mx-auto py-24 px-32 flex">
    <div className="w-3/5 bg-lime-400 mr-10 h-96">
      <h1>Movie Poster</h1>
    </div>
    <div className="w-2/5 bg-white h-56 shadow-lg border">
      <div className="bg-gray-900 py-2">
        <h2 className="text-lg text-white text-center">Movie poster details</h2>
      </div>
    </div>
  </div>
);

export default MovieDetails;
