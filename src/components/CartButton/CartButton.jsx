import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartButton.css";
import AppContext from "../../context/CartContext";
import Cart from "../Cart/Cart";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <div>
      <button
        type="button"
        className="cart__button"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <AiOutlineShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart-status">{cartItems.length}</span>
        )}
      </button>
      
      {isCartVisible && (
        <div className="cart-content">
          <Cart />
        </div>
      )}
    </div>
  );
}

export default CartButton;
