import React from "react";
import { updateCurrentPage } from "../../redux/actions/MoviesAction";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.movies?.currentPage);

  return (
    <div className="bg-primary text-textColor flex justify-center items-center gap-5 p-2 border-t-2 border-b-2 border-headerTxtColor">
      <button
        disabled={!(pageNumber > 1)}
        onClick={() => dispatch(updateCurrentPage(pageNumber - 1))}
        className="cursor-pointer"
        style={{ color: pageNumber <= 1 ? "#AAAAAA" : "" }}
      >
        Previous Page
      </button>

      <p>
        {pageNumber} of {totalPages}
      </p>
      <button
        disabled={!(pageNumber < totalPages)}
        onClick={() => dispatch(updateCurrentPage(pageNumber + 1))}
        style={{ color: pageNumber > totalPages ? "#AAAAAA" : "" }}
        className="cursor-pointer"
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
