import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../../lib/constant/ConstantVal";
import { getCastDetail } from "../../redux/actions/CasteAction";

const MovieCrads = ({ movieData, Api_key, pageNumber }) => {
  const searchMovie = useSelector((state) => state.movies?.searchData?.results);
  const updatedData = searchMovie?.length ? searchMovie : movieData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailHandler = (movie_id) => {
    //taking single movie data
    const detailRes = movieData.find((item) => item.id === movie_id);

    if (detailRes) {
      // Passing single detail data to the detail page using state
      navigate("/detail", { state: { singleData: detailRes } });
    }
    // getting incorrect details in repsonse thats why commented it
    // taking cast details but here getting wrong data from Api i should get 1 data for perticular ID but i'm getting approx 40 data thats why i skipp cast UI
    // dispatch(
    //   fetchMovies(
    //     `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`,
    //     "cast",
    //     getCastDetail,pageNumber
    //   )
    // );
  };

  return (
    <u className="flex flex-wrap gap-8 py-16 justify-center lg:justify-normal">
      {updatedData?.map((items) => {
        return (
          <li
            key={items?.id}
            className=" basis-56 text-textColor font-semibold cursor-pointer"
            onClick={() => detailHandler(items.id)}
          >
            <figure className="mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${items?.poster_path}`}
                alt={items?.original_title}
              />
            </figure>
            <h2>{items?.original_title}</h2>
            <span className="block">Rating: {items?.vote_average}</span>
          </li>
        );
      })}
    </u>
  );
};

export default MovieCrads;
