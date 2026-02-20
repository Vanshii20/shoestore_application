import shoes from "../data/shoes";
import ShoeCard from "./ShoeCard1";

function ShoeList({ addToCart }) {
  return (
    <div className="shoe-grid">
      {shoes.map(shoe => (
        <ShoeCard key={shoe.id} shoe={shoe} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoeList;
