import React from "react";
import "./holyGrail.css";
const HolyGrail = () => {
  return (
    <div className="app">
      <header className="header">Header</header>
      <div className="holy-grail-content">
        <aside className="side-column">Left Sidebar</aside>
        <main className="main-content">Main Content</main>
        <aside className="side-column">Right Sidebar</aside>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default HolyGrail;
