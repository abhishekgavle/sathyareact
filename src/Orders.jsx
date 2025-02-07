import { useSelector } from "react-redux";

function Orders() {
  const purchaseHistory = useSelector(state => state.purchaseDetails);

  let finalData = purchaseHistory.map((purchase, index) => (
    <li key={index} className="list-group-item">
      <h5>Date: {purchase.date}</h5>
      <p><strong>Total Amount:</strong> ${purchase.totalPrice.toFixed(2)}</p>
      <ul className="list-group">
        {purchase.items.map((item, itemIndex) => (
          <li key={itemIndex} className="list-group-item">
             
            {item.name} - ${item.price} * {item.quantity}
            <img src={item.image} alt={item.brand} width="45" height="70" />
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="container my-5">
      <h2 className="mb-4">Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p>No purchase history available</p>
      ) : (
        <ul className="list-group">{finalData}</ul>
      )}
    </div>
  );
}

export default Orders;
