import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Speakers from "./Speakers";

const Products = () => {
  return (
    <div className="border p-3 my-3">
      <Mobiles />
      <Computers />
      <Speakers />
    </div>
  );
};

export default Products;
