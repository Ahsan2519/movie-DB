import axios from "axios";
import {
  fetchMoviesError,
  fetchMoviesPending,
  fetchMoviesSuccess,
} from "../../redux/actions/MoviesAction";

export const navData = [
  {
    url: "/",
    navName: "Popular",
  },
  {
    url: "/toprated",
    navName: "Top Rated",
  },
  {
    url: "/upcoming",
    navName: "Upcoming",
  },
];

const Api_key = "c45a857c193f6302f2b5061c3b85e743";

export const fetchMovies = (url, sliceName) => {
  return async (dispatch, getState) => {
    const state = getState();
    const sliceData = state[sliceName];

    // Check if data is already available in the specified slice of the store
    // if (sliceData && sliceData.data) {
    //   return;
    // }

    dispatch(fetchMoviesPending());

    try {
      const response = await axios.get(url, {
        params: {
          api_key: Api_key,
          language: "en-US",
          page: 1,
        },
      });
      console.log("1111111111111111111111111", sliceData && sliceData.data);

      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesError(error));
    }
  };
};
