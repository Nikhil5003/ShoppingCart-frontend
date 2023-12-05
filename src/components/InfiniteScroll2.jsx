import React, { useEffect, useState, useRef, useCallback } from "react";

const InfiniteScroll2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const lastElementRef = useRef(null);
  const handleObserver = useCallback(
    ([entry]) => {
      const { isIntersecting } = entry || {};
      if (isIntersecting && !loading) {
        setCurrentPage((prev) => (prev < 10 ? prev + 1 : 10));
      }
    },
    [loading]
  );
  const fetchData = async (page) => {
    try {
      setLoading(true);
      const api_url = `https://dummyjson.com/products?skip=${
        (page - 1) * 10
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
    const observer = new IntersectionObserver(handleObserver);
    if (lastElementRef && lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
    return () => {
      if (lastElementRef && lastElementRef.current) {
        observer.unobserve(lastElementRef.current);
      }
    };
  }, [handleObserver]);

  return (
    <div>
      <h1>Infinite scroll</h1>
      <div>
        {items.map(({ title }, index) =>
          !(index + 1 === items.length) ? (
            <h2
              style={{
                marginBottom: 30,
              }}
              key={index}
            >
              {title}
            </h2>
          ) : (
            <h2
              key={index}
              style={{
                marginBottom: 30,
              }}
              ref={lastElementRef}
            >
              {title}
            </h2>
          )
        )}
      </div>
      {loading && <h3>Loading ....</h3>}
    </div>
  );
};

export default InfiniteScroll2;
