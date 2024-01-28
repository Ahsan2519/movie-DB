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
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  // const loader = useSelector( state => state.movies.loading);
  // console.log('loader',loader)
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  // const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  // const [pageNumber, setPageNumber] = useState(1);
  
  const movies = useSelector((state) => state.movies);
  // console.log(movies)
  const movieData = useSelector((state) => state.movies?.data?.results);

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`,'movies'
      )
    );
  }, [dispatch, pageNumber]); 
  return (
    <>
      {/* {loader && <Loader />} */}
      <Router>
        <Nav  Api_key={Api_key} pageNumber={pageNumber} movieData={movieData}/>
        <Routes>
          <Route path="/" element={<Home Api_key={Api_key} />} />
          <Route path="/toprated" element={<TopRated Api_key={Api_key} />} />
          <Route path="/upcoming" element={<Upcoming Api_key={Api_key} />} />
          <Route path="/detail" element={<MovieDetails Api_key={Api_key} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
