import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Bakery() {
  const bakeryItems = useSelector((state) => state.product.Bakery);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const totalPages = Math.ceil(bakeryItems.length / itemsPerPage);
  const [pageNumber, setPageNumber] = useState(0);

  const pageStartItemIndex = pageNumber * itemsPerPage;
  const pageEndItemIndex = pageStartItemIndex + itemsPerPage;
  const currentPageItems = bakeryItems.slice(pageStartItemIndex, pageEndItemIndex);

  const handlePage = (page) => {
    setPageNumber(page);
  };

  const finalItems = currentPageItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  const buttons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      className={`btn ${index === pageNumber ? "btn-primary" : "btn-outline-primary"} mx-1`}
      onClick={() => handlePage(index)}
      disabled={index === pageNumber}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-primary">Welcome to the Bakery Section</h1>
      <div className="row">{finalItems}</div>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-secondary mx-2"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        {buttons}
        <button
          className="btn btn-secondary mx-2"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Bakery;
