import { useSelector } from "react-redux";

function Orders() {
  const purchaseHistory = useSelector((state) => state.purchaseDetails);

  const finalData = purchaseHistory.map((purchase, index) => (
    <div key={index} className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg border-0 rounded-3 hover-effect">
        <div className="card-header bg-primary text-white text-center rounded-top">
          <h5 className="fw-bold">Order Date: {purchase.date}</h5>
        </div>
        <div className="card-body">
          <h6 className="text-center text-muted">
            Total Amount: <span className="text-success">${purchase.totalPrice.toFixed(2)}</span>
          </h6>
          <ul className="list-group list-group-flush mt-3">
            {purchase.items.map((item, itemIndex) => (
              <li key={itemIndex} className="list-group-item d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle border"
                  width="60"
                  height="60"
                />
                <div className="ms-3">
                  <h6 className="fw-bold">{item.name}</h6>
                  <p className="text-muted mb-0">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <span className="badge bg-success ms-auto fs-6">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Your Purchase History</h2>
      <div className="row justify-content-center">
        {purchaseHistory.length === 0 ? (
          <div className="col-12 text-center alert alert-warning">
            <strong>No purchase history available.</strong>
          </div>
        ) : (
          finalData
        )}
      </div>
    </div>
  );
}

export default Orders;
