import React, { createContext, useContext } from "react";
import { useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, SetCartItems] = useState([]);

  const addToCart = (item) => {
    SetCartItems([...cartItems, item]);
  };
  const remFromCart = (item) => {
    SetCartItems(cartItems.filter((itemx) => itemx !== item));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, remFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
