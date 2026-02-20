import React from "react";

function CartItem({ item, increaseQty, decreaseQty }) {

  return (
    <div className="cart-item">

      <img src={item.image} alt={item.name} className="cart-img" />

      <div className="cart-details">

        <h4>{item.name}</h4>
        <p className="price">₹{item.price}</p>

        <div className="qty-box">
          <button onClick={() => decreaseQty(item.id)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

      </div>

    </div>
  );
}

export default CartItem;
