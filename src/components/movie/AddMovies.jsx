import React from 'react';

const AddMovies = () => (
  <div className="w-full h-screen flex justify-center items-center bg-gray-100">
    <div className="w-1/2 shadow-md border">
      <div className="py-3 px-8 border-b-2">
        <h1>Add Movie</h1>
      </div>
      <form className="my-16 px-10 bg-white">
        <div className="flex mb-4">
          <label htmlFor="title" className="block mr-5 w-1/2">
            <span className="block mb-1">Title</span>
            <input type="text" id="title" className="py-2 px-3 border w-full" />
          </label>
          <label htmlFor="director" className="block w-1/2">
            <span className="block mb-1">Director</span>
            <input
              type="text"
              id="director"
              className="py-2 px-3 border w-full"
            />
          </label>
        </div>
      </form>
    </div>
  </div>
);

export default AddMovies;
