import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const RenderingPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 10;

    if (totalPages <= maxVisibleButtons) {
      // Rendering all pages if total pages are less than or equal to maxVisibleButtons
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={`page-${i}`}
            onClick={() => onPageChange(i)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= Math.floor(maxVisibleButtons / 2)) {
        // Rendering first maxVisibleButtons pages
        for (let i = 1; i <= maxVisibleButtons; i++) {
          buttons.push(
            <button
              key={`page-${i}`}
              onClick={() => onPageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {i}
            </button>
          );
        }
        buttons.push(
          <span key="dots-1" className="text-white">
            ...
          </span>
        );
        buttons.push(
          <button
            key={`page-${totalPages}`}
            onClick={() => onPageChange(totalPages)}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
          >
            {totalPages}
          </button>
        );
      } else if (currentPage > totalPages - Math.floor(maxVisibleButtons / 2)) {
        // Rendering last maxVisibleButtons pages
        buttons.push(
          <button
            key={`page-1`}
            onClick={() => onPageChange(1)}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
          >
            {1}
          </button>
        );
        buttons.push(
          <span key="dots-2" className="text-white">
            ...
          </span>
        );
        for (let i = totalPages - maxVisibleButtons + 1; i <= totalPages; i++) {
          buttons.push(
            <button
              key={`page-${i}`}
              onClick={() => onPageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {i}
            </button>
          );
        }
      } else {
        // Rendering maxVisibleButtons pages around current page
        buttons.push(
          <button
            key={`page-1`}
            onClick={() => onPageChange(1)}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
          >
            {1}
          </button>
        );
        buttons.push(
          <span key="dots-3" className="text-white">
            ...
          </span>
        );
        for (
          let i = currentPage - Math.floor(maxVisibleButtons / 2);
          i <= currentPage + Math.floor(maxVisibleButtons / 2);
          i++
        ) {
          buttons.push(
            <button
              key={`page-${i}`}
              onClick={() => onPageChange(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {i}
            </button>
          );
        }
        buttons.push(
          <span key="dots-4" className="text-white">
            ...
          </span>
        );
        buttons.push(
          <button
            key={`page-${totalPages}`}
            onClick={() => onPageChange(totalPages)}
            className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
          >
            {totalPages}
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex justify-center py-4 bg-primary border-t border-b border-headerTxtColor overflow-x-auto">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
      >
        Previous
      </button>

      {RenderingPaginationButtons()}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="mx-1 px-3 py-1 rounded bg-white text-blue-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
