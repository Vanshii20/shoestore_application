import CartItem from "./CartItem";

function Cart({ cart, increaseQty, decreaseQty }) {

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  return (
    <div className="cart">

      <h3>Your Cart</h3>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))
        )}
      </div>

      <div className="cart-total">
        <h4>Total:₹{total}</h4>
      </div>

    </div>
  );
}

export default Cart;
