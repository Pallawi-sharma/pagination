const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePagination = (n) => {
    setCurrentPage(n);
  };

  const goLeft = () => {
    setCurrentPage((prev) => prev - 1);
  };
  
  const goRight = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 0} onClick={() => goLeft()}>
        ◀️
      </button>
      {[...Array(totalPages).keys()].map((n) => (
        <button
          className={n === currentPage ? "active" : ""}
          key={n}
          onClick={() => handlePagination(n)}
        >
          {n}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => goRight()}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
