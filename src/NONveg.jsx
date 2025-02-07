import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";



function NONveg() {
  const NONveg = useSelector((state) => state.product.NONveg);
  const dispatch = useDispatch();

  const finalItems = NONveg.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img
          src={item.image}
          alt={item.brand}
          className="card-img-top"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-danger">Welcome to Non-Veg Section</h1>
      <div className="row">{finalItems}</div>
    </div>
  );
}

export default NONveg;
