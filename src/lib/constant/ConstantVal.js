import axios from "axios";
import { fetchMoviesError } from "../../redux/actions/MoviesAction";

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

export const fetchMovies = (
  url,
  sliceName,
  fetchActio,
  fetchPending,
  pageNumber
) => {
  return async (dispatch, getState) => {
    const state = getState();
    const sliceData = state[sliceName];

    // Check if data is already available in the specified slice of the store
    // if (sliceData && sliceData.data) {
    //   return;
    // }

    dispatch(fetchPending());

    try {
      const response = await axios.get(url);

      dispatch(fetchActio(response.data));
    } catch (error) {
      dispatch(fetchMoviesError(error));
    }
  };
};
