// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
// import NestedCheckBox from "./components/NestedCheckBox";
// import CommentSection from "./components/CommentSection";
import CancelApi from "./components/CancelApi";
// import "./App.css";
// import Timer from "./components/Timer";
// import InfiniteScroll from "./components/InfiniteScroll";
// import InfiniteScroll2 from "./components/InfiniteScroll2";
// import FilterItems from "./components/FilterItems";
// import TodoList from "./components/TodoList";
// import StopWatch from "./components/StopWatch";
// import FileExplorer from "./components/FileExplorer";
// import StarRating from "./components/StarRating";
// import LazyImage from "./components/LazyImage";
// import Main from "./components/ShoppingCart/main";
// import SnakeLadderGame from "./components/snakeLadderGame";
// import Tictactoe from "./components/Tictactoe";
// import ProgressBar from "./components/ProgressBar";
// import HolyGrail from "./components/holyGrail";
// import TrafficLight from "./components/TrafficLight";
// import Clock from "./components/Clock";
// import ResponsiveComponent from "./components/Responsive";
// import AnalogClock from "./components/AnalogClock";
function App() {
  const config = [
    {
      label: "Parent1",
      id: 1,
      children: [
        {
          label: "Child p1.c1",
          id: 2,
          children: [
            {
              label: "nikhil",
              id: 10,
              children: [
                {
                  label: "aksh",
                  id: 13,
                },
                {
                  label: "sharma",
                  id: 12,
                },
              ],
            },
            {
              label: "Attri",
              id: 11,
            },
          ],
        },
        {
          label: "Child p1.c2",
          id: 3,
        },
        {
          label: "Childp1.c3",
          id: 4,
        },
      ],
    },
    {
      label: "Parent2",
      id: 5,
    },
  ];

  return (
    <div className="App">
      {/* <NestedCheckBox config={config} /> */}
      {/* <Main /> */}
      {/* <Timer /> */}
      {/* <hr /> */}
      {/* <InfiniteScroll />
      <InfiniteScroll2/> */}
      {/* <FilterItems /> */}
      {/* <TodoList /> */}
      {/* <StopWatch /> */}
      {/* <FileExplorer /> */}
      {/* <StarRating /> */}
      {/* {images.map((ele) => (
        <LazyImage src={ele} alt={"NO image found"} />
      ))} */}
      {/* <SnakeLadderGame /> */}
      {/* <Tictactoe />
     
      {/* <HolyGrail /> */}
      {/* {<Clock />} */}
      {/* <TrafficLight /> */}
      {/* <AnalogClock /> */}
      {/* <ProgressBar /> */}
      {/* <ResponsiveComponent /> */}
      {/* <CommentSection /> */}
      <CancelApi />
    </div>
  );
}

export default App;

// const images = [
//   "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];
