import axios from 'axios';

const FETCH_MOVIES = 'FETCH_MOVIES';

// App initial state
const initialState = {
  movies: [],
};

// Actions
// Login
export const movies = (payload) => ({
  type: FETCH_MOVIES,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
  let movies;
  try {
    const fetchedMovies = await axios.post(
      'http://localhost:3000/api/v1/movies',
    );
    movies = fetchedMovies.data.user;
  } catch (error) {}
  dispatch(movies(user));
};

// Reducer
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
