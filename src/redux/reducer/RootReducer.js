
import { combineReducers } from 'redux';
import MoviesReducer from '../reducer/MoviesReducer';
import CastReducer from './CastReducer';


const RootReducer = combineReducers({
  movies: MoviesReducer,
  cast: CastReducer
});

export default RootReducer;
