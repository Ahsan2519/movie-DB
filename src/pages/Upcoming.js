import React from "react";
import { useSelector } from "react-redux";
import MovieCrads from "../components/cards/MovieCrads";

const Upcoming = ({ Api_key, pageNumber, setIsDetailpage }) => {
  const movieData = useSelector((state) => state.movies?.data?.results);
  return (
    <div className="bg-primary">
      <div className="wrapper">
        <MovieCrads
          movieData={movieData}
          Api_key={Api_key}
          pageNumber={pageNumber}
          setIsDetailpage={setIsDetailpage}
        />
      </div>
    </div>
  );
};

export default Upcoming;
