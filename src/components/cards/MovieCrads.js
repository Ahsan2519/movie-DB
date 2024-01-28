import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../../lib/constant/ConstantVal";

const MovieCrads = ({ movieData, Api_key }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const detailHandler = (movie_id)=> {
        console.log("Movie ID:", movie_id);
        console.log('movieData',movieData)
        navigate('/detail');
        dispatch(
            fetchMovies(
              `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`,
              "movies"
            )
          );
    }
  return (
    <u className="flex flex-wrap gap-8 py-16 justify-center lg:justify-normal">
      {movieData?.map((items) => {
        return (
          <li
            key={items?.id}
            className=" basis-56 text-textColor font-semibold cursor-pointer"
            onClick={()=>detailHandler(items.id)}
          >
            <figure className="mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${items?.poster_path}`}
                alt={items?.original_title}
              />
            </figure>
            <h2>{items?.original_title}</h2>
            <span className="block">Rating:{items?.vote_average}</span>
          </li>
        );
      })}
    </u>
  );
};

export default MovieCrads;
