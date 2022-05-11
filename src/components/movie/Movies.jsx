import NavBar from '../navbar/NavBar';
import Movie from './Movie';

const Movies = () => (
  <>
    <NavBar />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-24 pl-32 pr-4">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  </>
);

export default Movies;
