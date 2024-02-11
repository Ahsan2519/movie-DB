import {
  FETCHMOVIESERROR,
  FETCHMOVIESPENDING,
  FETCHMOVIESSUCCESS,
  SEARCHMOVIES,
  UPDATECURRENTPAGE,
} from "../actions/MoviesAction";

const initialState = {
  data: null,
  loading: false,
  error: null,
  searchData: null,
  currentPage: 1,
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
    case UPDATECURRENTPAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SEARCHMOVIES:
      return {
        ...state,
        loading: false,
        searchData: action.payload,
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
