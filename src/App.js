import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/header/Nav";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import TopRated from "./pages/TopRated";
import { fetchMovies } from "./lib/constant/ConstantVal";
import Upcoming from "./pages/Upcoming";
import DetailPage from "./pages/DetailPage";
import {
  fetchMoviesPending,
  fetchMoviesSuccess,
} from "./redux/actions/MoviesAction";
import Pagination from "./components/pagination/Pagination";

const App = () => {
  const loader = useSelector((state) => state.movies.loading);
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.movies?.data?.total_pages);
  const [isDetailPage, setIsDetailpage] = useState(false);
  const pageNumber = useSelector((state) => state.movies?.currentPage);

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
        "movies",
        fetchMoviesSuccess,
        fetchMoviesPending,
        pageNumber
      )
    );
  }, [dispatch, pageNumber]);

  return (
    <>
      {loader && <Loader />}
      <Router>
        <Nav Api_key={Api_key} setIsDetailpage={setIsDetailpage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home Api_key={Api_key} setIsDetailpage={setIsDetailpage} />
            }
          />
          <Route
            path="/toprated"
            element={
              <TopRated Api_key={Api_key} setIsDetailpage={setIsDetailpage} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <Upcoming Api_key={Api_key} setIsDetailpage={setIsDetailpage} />
            }
          />
          <Route
            path="/detail"
            element={
              <DetailPage Api_key={Api_key} setIsDetailpage={setIsDetailpage} />
            }
          />
        </Routes>
        {!isDetailPage && <Pagination totalPages={totalPages} />}
        <Footer />
      </Router>
    </>
  );
};

export default App;
