import { useState } from "react";
import Navbar from "./components/Navbar";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";
import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {

    let found = false;

    const updatedCart = cart.map(item => {
      if (item.id === shoe.id) {
        found = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    if (found) {
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {

    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQty = (id) => {

    const updatedCart = cart
      .map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  return (
    <div>

      <Navbar />

      <div className="main-layout">
        <ShoeList addToCart={addToCart} />

        <Cart
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      </div>

    </div>
  );
}

export default App;
