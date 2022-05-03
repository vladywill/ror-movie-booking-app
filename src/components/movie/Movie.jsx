import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from 'react-icons/ti';

const Movie = () => (
  <div className="p-5 rounded-md overflow-hidden pb-10">
    <div className="bg-lime-400 h-40 text-center flex justify-center items-center">
      <p>Movie image</p>
    </div>
    <h1 className="mt-10 text-center font-semibold">Movie Title</h1>
    <p className="mt-10 text-center text-sm text-gray-500">
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
