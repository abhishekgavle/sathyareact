import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Bakery() {
  // Accessing the Bakery section from the Redux store
  const bakeryItems = useSelector((state) => state.product.Bakery); // Assumes you have a Bakery section in your Redux store
  const dispatch = useDispatch();

  // Mapping through the bakery items to display them
  const finalItems = bakeryItems.map((item, index) => (
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
            onClick={() => dispatch(addToCart(item))} // Dispatch addToCart action
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  // Rendering the component with a header and a list of bakery items
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-primary">Welcome to the Bakery Section</h1>
      <div className="row">{finalItems}</div>
    </div>
  );
}

export default Bakery;
