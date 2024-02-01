import { FETCHCASTENDING, GETCASTE } from "../actions/CasteAction";
import { FETCHMOVIESERROR } from "../actions/MoviesAction";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const CastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCASTENDING:
      return {
        ...state,
        loading: true,
      };
    case GETCASTE:
      return {
        ...state,
        loading: false,
        data: action.payload,
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

export default CastReducer;
