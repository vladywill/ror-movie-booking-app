/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';

const MovieDetails = () => {
  const params = useParams();
  const movies = useSelector((state) => state.moviesReducer.movies);

  const movie = movies.find((item) => item.id == params.id);

  return (
    <>
      <NavBar />
      <div className="container mx-auto py-24 px-32 flex">
        <div className="w-3/5 bg-gray-400 mr-10 h-96 p-5">
          <img src={movie.photo} alt="" />
        </div>
        <div className="w-2/5 bg-white shadow-lg relative">
          <div className="bg-gray-900 py-2">
            <h2 className="text-lg text-white text-center">
              Movie details
            </h2>
          </div>
          <div className="px-6">
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-600 font-semibold">{movie.title}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Launch date:</span>
              <span className="text-gray-600">{movie.release_date}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Ticket price:</span>
              <span className="text-gray-600">{movie.ticket_price}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Country:</span>
              <span className="text-gray-600">{movie.country}</span>
            </div>
            <div className="mb-3 mt-5 flex justify-between items-center">
              <span className="text-gray-500">Playing Time:</span>
              <span className="text-gray-600">{movie.playing_time}</span>
            </div>
            <div className="mb-3 mt-5">
              <span className="text-gray-500 block font-semibold mb-2">Description:</span>
              <span className="text-gray-600 mb-4 block">{movie.description}</span>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-0 right-0 my-4 mr-5 bg-gray-600 px-12 py-2 text-lg text-white hover:bg-gray-800"
          >
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
