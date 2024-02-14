import { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center">
      <div className="join">
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            if (page > 1) {
              handlePageChange(page - 1);
            }
          }}
          disabled={page <= 1}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`join-item btn btn-xs sm:btn-md ${
                pageNumber === page && 'btn-active'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="join-item btn btn-xs sm:btn-md"
          onClick={() => {
            if (page < pageCount) {
              handlePageChange(page + 1);
            }
          }}
          disabled={page >= pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
