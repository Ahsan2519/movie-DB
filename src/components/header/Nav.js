import React, { useState } from "react";
import { fetchMovies, navData } from "../../lib/constant/ConstantVal";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  fetchMoviesPending,
  fetchMoviesSuccess,
  searchMovies,
} from "../../redux/actions/MoviesAction";
import axios from "axios";

const Nav = ({ Api_key, setIsDetailpage }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [error, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pageNumber = useSelector((state) => state.movies?.currentPage);

  const navigateHandle = (name) => {
    setIsDetailpage(false);
    if (name === "Popular") {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies",
          fetchMoviesSuccess,
          fetchMoviesPending,
          pageNumber
        )
      );
    } else if (name === "Top Rated") {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies",
          fetchMoviesSuccess,
          fetchMoviesPending,
          pageNumber
        )
      );
    } else {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies",
          fetchMoviesSuccess,
          fetchMoviesPending,
          pageNumber
        )
      );
    }
  };

  const searchHandler = async (e) => {
    const searchQuery = e.target.value.trim();
    setSearchValue(searchQuery);

    if (!searchQuery) {
      setIsError(false);
      dispatch(searchMovies(null));
    } else {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&query=${searchQuery}&page=${pageNumber}`;
      try {
        const response = await axios.get(url);
        const searchData = response.data;
        if (searchData.results.length === 0) {
          setIsError(true);
        } else {
          dispatch(searchMovies(searchData));
          setIsError(false);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setIsError(error);
        dispatch(searchMovies(null));
      }
    }
  };

  return (
    <header className="bg-headerolor px-10 py-5 pb-6  text-white overflow-hidden ">
      <div className="wrapper flex justify-between mx-auto items-center">
        <h1 className="font-semibold text-xl" title="Movie Db">
          MovieDb
        </h1>

        <div onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FaTimes className="block lg:hidden" />
          ) : (
            <FaBars className="block lg:hidden" />
          )}
        </div>

        <nav
          className={`flex absolute ${
            toggle ? "top-[68px]" : "-top-full"
          } transition-all ease-in-out duration-[.5s]  lg:static w-full right-0 lg:w-auto lg:h-auto bg-headerolor lg:bg-inherit rounded-md lg:rounded-none rounded-t-none h-fit  flex-col lg:flex-row px-5 lg:px-0 pt-2 lg:pt-0 z-50`}
        >
          <ul className="flex gap-6 mr-4 items-center flex-col lg:flex-row">
            {navData.map((navItems) => {
              return (
                <li
                  key={navItems.navName}
                  className="text-headerTxtColor font-semibold  hover:text-white cursor-pointer"
                  onClick={() => navigateHandle(navItems.navName)}
                >
                  <NavLink
                    to={navItems.url}
                    title={navItems.navName}
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    {navItems.navName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <form
            action="#"
            method="post"
            className="flex justify-between flex-col lg:flex-row lg:flex- py-4 lg:py-0 relative"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="basis-[70%] pb-3 lg:pb-0 ">
              <input
                type="text"
                placeholder="Movie Name"
                name="movieName"
                value={searchValue}
                className="text-headerolor py-2 px-4 rounded-sm w-full"
                onChange={(e) => {
                  searchHandler(e);
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-btnbg px-3 text-center rounded-sm font-semibold text-lg hover:text-btnbg hover:bg-white transition-all duration-300 border-transparent border-2 hover:border-btnbg"
            >
              Search{" "}
            </button>
            {error && (
              <span className="text-red-600 block absolute -bottom-6 text-lg">
                Sorry we couldn't find any movies.
              </span>
            )}
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
