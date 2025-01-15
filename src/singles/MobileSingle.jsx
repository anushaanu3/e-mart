import React from "react";
import { mobileData } from "../stores/data/mobiles";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/Context/CartContext";
const MobileSingle = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const product = mobileData.find((item) => item.id === id);
  console.log(id);
  return (
    <div>
      <Navbar />
      <div>
        <img src={product.image} alt="" />
      </div>
      <div>
        <h3>{product.model}</h3>
      </div>
      <div>
        <h3>{product.price}</h3>
      </div>
      <div>
        <h3>{product.description}</h3>
      </div>
      <div>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MobileSingle;
