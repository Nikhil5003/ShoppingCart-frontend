import React, { useState } from "react";
import { CartState } from "./Context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import "./styles.css";
import Pagination from "../Pagination";
const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  const [currentPage, setCurrentPage] = useState(1);
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  const items_per_page = 9;
  const totalPageCount = Math.ceil(transformProducts().length / items_per_page);
  const startingIndex = (currentPage - 1) * items_per_page;
  const endingIndex = currentPage * items_per_page;
  const data = transformProducts().slice(startingIndex, endingIndex);

  return (
    <div className="home">
      <Filters />
      <div className="product-container">
        {data ? (
          data.map((prod, index) => <SingleProduct prod={prod} key={index} />)
        ) : (
          <div>No items found</div>
        )}
        {data.length > 0 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPageCount={totalPageCount}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
