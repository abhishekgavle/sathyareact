import { useSelector } from "react-redux";

function Orders() {
  const purchaseHistory = useSelector(state => state.purchaseDetails);

  // Loop through each purchase in the purchaseHistory
  let finalData = purchaseHistory.map((purchase, index) => (
    <div key={index} className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg border-0 rounded-lg hover-effect">
        <div className="card-header bg-primary text-white text-center">
          <h5>Order Date: {purchase.date}</h5>
        </div>
        <div className="card-body">
          <h6 className="text-center text-muted">Total Amount: ${purchase.totalPrice.toFixed(2)}</h6>
          <ul className="list-group list-group-flush">
            {purchase.items.map((item, itemIndex) => (
              <li key={itemIndex} className="list-group-item d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle"
                  width="60"
                  height="60"
                />
                <div className="ml-3">
                  <h6>{item.name}</h6>
                  <p className="text-muted mb-0">${item.price} x {item.quantity}</p>
                </div>
                <span className="badge badge-success badge-pill ml-auto">
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
      <div className="row">
        {purchaseHistory.length === 0 ? (
          <div className="col-12 text-center alert alert-warning">
            No purchase history available.
          </div>
        ) : (
          finalData
        )}
      </div>
    </div>
  );
}

export default Orders;
