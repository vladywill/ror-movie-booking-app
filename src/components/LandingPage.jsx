import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-hero">
    <div className="container mx-auto px-32 flex justify-center items-baseline">
      <div className="w-7/12 h-64 bg-gray-900 absolute bottom-0 rounded-tr-full rounded-tl-full flex justify-center">
        <div className="w-8/12 py-10">
          <h1 className="text-center text-3xl text-white">Doctor Strange</h1>
          <h2 className="text-center text-lg text-white">In The</h2>
          <h2 className="text-center text-2xl text-white">
            Multiverse of Darkness
          </h2>
          <div className="flex justify-center">
            <Link
              to="/movies"
              className="my-6 py-4 px-24 bg-white border uppercase text-gray-900 font-semibold hover:border-white hover:bg-gray-900 hover:text-white"
            >
              Browse More Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
