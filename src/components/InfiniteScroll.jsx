import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
const InfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchData = async (currentPage) => {
    try {
      setLoading(true);
      const api_url = `https://dummyjson.com/products?skip=${
        (currentPage - 1) * 10
      }&limit=10`;
      const data = await fetch(api_url);
      const res = await data.json();
      const { products = [] } = res || {};
      setItems((prev) => [...prev, ...products]);
    } catch (err) {
      console.log(err, "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
        setCurrentPage((prev) => (prev < 10 ? prev + 1 : 10));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);
  return (
    <div>
      <h1>Infinite scroll</h1>
      <div>
        {items.map(({ title }, index) => (
          <h2
            style={{
              marginBottom: 30,
            }}
            key={index}
          >
            {title}
          </h2>
        ))}
      </div>
      {loading && <CircularProgress color="secondary" />}
    </div>
  );
};

export default InfiniteScroll;
