import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import Navigation from "./components/Navigation";

function OnlineStore() {
  return (
    <div className="App">
      <header className="Shop-header">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          {/* root landing component */}
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default OnlineStore;
