import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Context from "./Context/Context";
const Main = () => {
  return (
    <BrowserRouter>
      <Context>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
};

export default Main;
