import React from "react";
import { Link } from "react-router-dom";

// component for the products page.
export default function Products() {
  return (
    <div className="container mt-5">
      {/* Page header */}
      <h1 className="mb-4">Our Products</h1>

      {/* product categories as links */}
      <div className="list-group">
        {/* Link to "Electronics" */}
        <Link
          to="/products/electronics"
          className="list-group-item list-group-item-action"
        >
          Electronics
        </Link>

        {/* Link to "Clothing" */}
        <Link
          to="/products/clothing"
          className="list-group-item list-group-item-action"
        >
          Clothing
        </Link>

        {/* Link to "Home Goods" */}
        <Link
          to="/products/home-goods"
          className="list-group-item list-group-item-action"
        >
          Home Goods
        </Link>
      </div>
    </div>
  );
}
