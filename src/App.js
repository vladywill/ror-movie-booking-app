import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Movies from './components/movie/Movies';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        {/* <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/my-reservation" element={<MyReservation />} />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/upcoming-movies" element={<UpComingMovies />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
