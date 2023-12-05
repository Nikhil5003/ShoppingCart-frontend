import React from "react";
import { Button } from "react-bootstrap";
const Pagination = ({ currentPage, setCurrentPage, totalPageCount }) => {
  const onPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 54,
        marginTop: 20,
        padding: 20,
      }}
    >
      <Button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button onClick={onNext} disabled={currentPage === totalPageCount}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
