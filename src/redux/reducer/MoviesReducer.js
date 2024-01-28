import {
  FETCHMOVIESERROR,
  FETCHMOVIESPENDING,
  FETCHMOVIESSUCCESS,
  SEARCHMOVIES,
} from "../actions/MoviesAction";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHMOVIESPENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCHMOVIESSUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SEARCHMOVIES:
      return {
        ...state,
        data: {
          results: action.payload,
        },
      };
    case FETCHMOVIESERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
