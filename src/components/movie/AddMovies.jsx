import React from 'react';
import NavBar from '../navbar/NavBar';

const AddMovies = () => (
  <>
    <NavBar />
    <div className="w-full flex justify-center bg-gray-100 py-16">
      <div className="w-1/2 shadow-md border bg-white pb-12">
        <div className="py-3 px-8 border-b-2">
          <h1>Add Movie</h1>
        </div>
        <form className=" px-10 mt-12">
          <div className="flex mb-4">
            <label htmlFor="title" className="block mr-5 w-1/2">
              <span className="block mb-1">Title</span>
              <input
                type="text"
                id="title"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter movie title"
              />
            </label>
            <label htmlFor="director" className="block w-1/2">
              <span className="block mb-1">Director</span>
              <input
                type="text"
                id="director"
                placeholder="Enter director name"
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </label>
          </div>
          <div className="flex mb-4">
            <label htmlFor="releaseDate" className="block mr-5 w-1/2">
              <span className="block mb-1">Release Date</span>
              <input
                type="date"
                id="releaseDate"
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </label>
            <label htmlFor="playingTime" className="block w-1/2">
              <span className="block mb-1">Playing Time</span>
              <input
                type="time"
                id="playingTime"
                className="py-2 px-3 border border-gray-300 w-full"
              />
            </label>
          </div>
          <div className="flex mb-4">
            <label htmlFor="genre" className="block mr-5 w-1/2">
              <span className="block mb-1">Genre</span>
              <input
                type="text"
                id="genre"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter movie genre"
              />
            </label>
            <label htmlFor="ticketPrice" className="block w-1/2">
              <span className="block mb-1">Ticket Price</span>
              <input
                type="text"
                id="ticketPrice"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="$ 0.0"
              />
            </label>
          </div>
          <div className="flex mb-4">
            <label htmlFor="leadCast" className="block mr-5 w-1/2">
              <span className="block mb-1">Lead Cast</span>
              <input
                type="text"
                id="leadCast"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter lead cast name"
              />
            </label>
            <label htmlFor="country" className="block w-1/2">
              <span className="block mb-1">Country</span>
              <input
                type="text"
                id="country"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter country"
              />
            </label>
          </div>
          <div className="flex mb-4">
            <label htmlFor="photo" className="block w-1/2">
              <span className="block mb-1">Photo</span>
              <input
                type="text"
                id="photo"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter photo URL"
              />
            </label>
          </div>
          <div className="flex mb-4">
            <label htmlFor="description" className="block w-full">
              <span className="block mb-1">Description</span>
              <textarea
                type="file"
                id="description"
                className="py-2 px-3 border border-gray-300 w-full"
                placeholder="Enter description text"
              />
            </label>
          </div>
          <hr />
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              className="mt-5 py-3 px-16 bg-gray-900 text-white"
            >
              Save Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
);

export default AddMovies;
