import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`join-item btn btn-xs sm:btn-md ${
          activeClass && 'btn-active'
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // dots
    if (page > 2) {
      pageButtons.push(
        <button className="btn btn-xs sm:btn-md join-item" key="dots-1">
          ...
        </button>
      );
    }

    // current page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn btn-xs sm:btn-md join-item" key="dots-2">
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
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
        {renderPageButtons()}
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
export default ComplexPaginationContainer;
