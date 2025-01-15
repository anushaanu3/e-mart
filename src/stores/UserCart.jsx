import React from "react";
import { useCart } from "./Context/CartContext";

const UserCart = () => {
  const { cartItems, addToCart } = useCart();
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div>
            <div>
              <img src={item.image} alt="" />
              <h3>
                {item.product},{item.price}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCart;
