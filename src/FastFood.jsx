import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function FastFood() {
  const fastFoodItems = useSelector((state) => state.product.FastFood);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [sortOrder, setSortOrder] = useState("asc");
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 6;

  // Filter items by name or price
  const filteredItems = fastFoodItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );

  // Sorting logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === "default") return 0;
    const fieldA = a[sortOption];
    const fieldB = b[sortOption];

    if (typeof fieldA === "string") {
      return sortOrder === "asc"
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
    } else {
      return sortOrder === "asc" ? fieldA - fieldB : fieldB - fieldA;
    }
  });

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const pageStartItemIndex = pageNumber * itemsPerPage;
  const pageEndItemIndex = pageStartItemIndex + itemsPerPage;
  const currentPageItems = sortedItems.slice(pageStartItemIndex, pageEndItemIndex);

  const handlePage = (page) => setPageNumber(page);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  const handleSortChange = (e) => setSortOption(e.target.value);
  const toggleSortOrder = () => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));

  return (
    <div className="container my-4">
      <div className="bg-warning text-dark text-center py-3 rounded shadow-sm">
        <h3 className="mb-0">🍔 Welcome to the Fast Food Section 🍟</h3>
        <p className="mb-0">Enjoy delicious and quick meals!</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <input
          type="text"
          placeholder="Search by name or price..."
          className="form-control form-control-sm"
          style={{ maxWidth: "300px" }}
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div className="d-flex align-items-center">
          <select
            className="form-select form-select-sm mx-2"
            style={{ maxWidth: "150px" }}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">Sort By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>

          <button className="btn btn-outline-secondary btn-sm" onClick={toggleSortOrder}>
            {sortOrder === "asc" ? "Ascend" : "Descend"}
          </button>
        </div>
      </div>

      <div className="row mt-4">
        {currentPageItems.map((item, index) => (
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
                  className="btn btn-warning"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {currentPageItems.length === 0 && (
          <p className="text-muted text-center w-100">No matching items found.</p>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-secondary mx-2"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 0}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${
              index === pageNumber ? "btn-warning" : "btn-outline-warning"
            } mx-1`}
            onClick={() => handlePage(index)}
            disabled={index === pageNumber}
          >
            {index + 1}
          </button>
        ))}
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

export default FastFood;
