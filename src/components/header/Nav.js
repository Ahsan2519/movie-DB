import React, { useState } from "react";
import { fetchMovies, navData } from "../../lib/constant/ConstantVal";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { searchMovies } from "../../redux/actions/MoviesAction";

const Nav = ({ Api_key, pageNumber, movieData }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [error, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigateHandle = (name) => {
    if (name === "Popular") {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies"
        )
      );
    } else if (name === "Top Rated") {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies"
        )
      );
    } else {
      dispatch(
        fetchMovies(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
          "movies"
        )
      );
    }
  };
  const searchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setSearchValue(searchQuery);
    console.log(searchValue);

    const res = movieData?.filter((value) =>
      value.title.toLowerCase().includes(searchQuery)
    );

    console.log();

    if (res && res.length !== 0) {
      dispatch(searchMovies(res));
    } else {
      console.log("object");
      setIsError(true);
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
            toggle ? "right-[7%] smallDevices::right-[12%]" : "right-full"
          } transition-all ease-in-out duration-[.5s]  lg:static w-[320px] lg:w-auto lg:h-auto bg-headerolor lg:bg-inherit rounded-md lg:rounded-none rounded-t-none h-fit top-[68px] flex-col lg:flex-row px-5 lg:px-0 pt-2 lg:pt-0 z-50`}
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
                Sorry we couldn't find any movies{" "}
              </span>
            )}
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
