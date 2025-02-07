import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Cart.css';
import { addPurchaseDetails, clearCart, decrementQuantity, incrementQuantity, removeItem } from "./Store";

function Cart() {
  const cartObjects = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Map cart objects to list items
  const cartItems = cartObjects.map((item, index) => (
    <li key={index} className="cart-item">
      <div className="cart-item-details">
        <span className="cart-item-name">{item.name}</span> - 
        <span className="cart-item-price">${item.price}</span>
        <img src={item.image} alt={item.brand} />
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
        <span>Quantity: {item.quantity}</span>
        <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
      </div>
      <button className="cart-item-remove" onClick={() => dispatch(removeItem(item))}>Remove</button>
    </li>
  ));

  const [discount, setDiscount] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState("");

  // Calculate totals
  const totalPrice = cartObjects.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (totalPrice * discount) / 100;
  const finalAmount = totalPrice - discountAmount;

  // Handle coupon application
  const handleCoupon = () => {
    switch (couponCode.toUpperCase()) {
      case 'RATAN10':
        setDiscount(10);
        setShowDiscount(true);
        setCouponError("");
        break;
      case 'RATAN20':
        setDiscount(20);
        setShowDiscount(true);
        setCouponError("");
        break;
      case 'RATAN30':
        setDiscount(30);
        setShowDiscount(true);
        setCouponError("");
        break;
      case 'RATAN40':
        setDiscount(40);
        setShowDiscount(true);
        setCouponError("");
        break;
      default:
        setCouponError('Invalid coupon code');
    }
  };

  // Handle purchase completion
  const handleCompletePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    const purchaseDetails = {
      date: purchaseDate,
      items: cartObjects,
      totalPrice: finalAmount,
      discountApplied: discount,
    };

    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));

    alert('Purchase completed successfully!');
  };

  return (
    <div className="cart-container">
      {cartObjects.length > 0 ? (
        <div>
          <h1>Your Cart</h1>
          <ul className="cart-items">{cartItems}</ul>

          <div className="cart-summary">
            <h3>Your total price: ${totalPrice.toFixed(2)}</h3>
            {showDiscount && (
              <div>
                <h3>Your discount: {discount}%</h3>
                <h3>Your discount amount: ${discountAmount.toFixed(2)}</h3>
              </div>
            )}
            <h3>Your amount to pay: ${finalAmount.toFixed(2)}</h3>

            <button className="discount-button" onClick={() => { setDiscount(10); setShowDiscount(true); }}>10% Discount</button>
            <button className="discount-button" onClick={() => { setDiscount(20); setShowDiscount(true); }}>20% Discount</button>
            <button className="discount-button" onClick={() => { setDiscount(30); setShowDiscount(true); }}>30% Discount</button>
          </div>

          <div className="coupon-section">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => { setCouponCode(e.target.value); setCouponError(""); }}
              placeholder="Enter the coupon code"
            />
            <button onClick={handleCoupon}>Apply Coupon</button>
          </div>

          {couponError && <p className="coupon-error">{couponError}</p>}

          <button className="complete-purchase-button" onClick={handleCompletePurchase}>Complete Purchase</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
