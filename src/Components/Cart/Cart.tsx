


export default function Cart({items}: {items: string[]}) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? <p>No items in your cart</p> : <p>You have {items.length} items in your cart</p>}
    </div>
  );
}
