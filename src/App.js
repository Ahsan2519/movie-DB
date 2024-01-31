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
import { fetchMoviesSuccess } from "./redux/actions/MoviesAction";
import Pagination from "./components/pagination/Pagination";


const App = () => {
  const loader = useSelector((state) => state.movies.loading);
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies?.data?.results);
  const totalPages = useSelector((state) => state.movies?.data?.total_pages);

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`,
        "movies",
        fetchMoviesSuccess,
        pageNumber
      )
    );
  }, [dispatch, pageNumber]);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };


  return (
    <>
      {loader && <Loader />}
      <Router>
        <Nav Api_key={Api_key} pageNumber={pageNumber} movieData={movieData} />
        <Routes>
          <Route path="/" element={<Home Api_key={Api_key} pageNumber={pageNumber} />} />
          <Route path="/toprated" element={<TopRated Api_key={Api_key} pageNumber={pageNumber} />} />
          <Route path="/upcoming" element={<Upcoming Api_key={Api_key} pageNumber={pageNumber}/>} />
          <Route path="/detail" element={<DetailPage Api_key={Api_key} pageNumber={pageNumber} />} />
        </Routes>
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Footer />
      </Router>
    </>
  );
};

export default App;
