import React from "react";
import {  useSelector } from "react-redux";
import MovieCrads from "../components/cards/MovieCrads";

const Home = ({Api_key}) => {
  const movieData = useSelector((state) => state.movies?.data?.results);
  console.log(movieData)
  return (
    <div className="bg-primary">
      <div className="wrapper">
        <MovieCrads movieData={movieData} Api_key= {Api_key}  />
      </div>
    </div>
  );
};

export default Home;
