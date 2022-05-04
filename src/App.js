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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
