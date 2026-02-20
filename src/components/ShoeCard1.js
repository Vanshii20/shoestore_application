function ShoeCard({ shoe, addToCart }) {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} />
      <h4>{shoe.name}</h4>
      <p>₹{shoe.price}</p>
      <button onClick={() => addToCart(shoe)}>Add</button>
    </div>
  );
}

export default ShoeCard;
