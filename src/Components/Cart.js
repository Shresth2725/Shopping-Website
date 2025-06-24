import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1>Cart</h1>
      <CartItem cards={cart} />
    </div>
  );
};

export default Cart;
