import React from "react";
import { useSelector } from "react-redux";
import MovieCrads from "../components/cards/MovieCrads";

const Upcoming = ({Api_key}) => {
  const movieData = useSelector((state) => state.movies?.data?.results ? state.movies?.data?.results : state.movies?.data);
  return (
    <div className="bg-primary">
      <div className="wrapper">
        <MovieCrads movieData={movieData} Api_key= {Api_key} />
      </div>
    </div>
  );
};

export default Upcoming;