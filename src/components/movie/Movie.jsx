import { Link } from 'react-router-dom';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

const Movie = () => (
  <div className="overflow-hidden pb-10 shadow-lg mx-4">
    <div className="bg-gray-800 h-56 text-center flex justify-center items-center relative w-full">
      <p>Movie image</p>
      <button type="button" className="py-3 px-5 rounded-full bg-white absolute bottom-0 right-0 shadow-xl -mb-6 mr-4 text-lg hover:bg-gray-900 hover:text-white hover:border border text-gray-900">Reserve</button>
    </div>
    <div className="mt-10 text-center">
      <Link to="/movies/:id" className="font-semibold">
        Movie Title
      </Link>
    </div>
    <p className="mt-10 text-center text-sm text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      commodo elit nibh.
    </p>
    <div className="mt-5 flex justify-center items-center">
      <ul className="flex items-center">
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
          <TiSocialFacebook className="text-lg" />
        </li>
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center mx-4">
          <TiSocialTwitter className="text-lg" />
        </li>
        <li className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center">
          <TiSocialInstagram className="text-lg" />
        </li>
      </ul>
    </div>
  </div>
);

export default Movie;
