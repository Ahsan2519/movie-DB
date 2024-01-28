
import { combineReducers } from 'redux';
import MoviesReducer from '../reducer/MoviesReducer';


const RootReducer = combineReducers({
  movies: MoviesReducer,
});

export default RootReducer;
