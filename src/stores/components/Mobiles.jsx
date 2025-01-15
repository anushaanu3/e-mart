import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";
const Mobiles = () => {
  const [selctedProduct, setSelectedProduct] = useState([]);
  const companyHandler = (filterprod) => {
    if (selctedProduct.includes(filterprod)) {
      setSelectedProduct(selctedProduct.filter((item) => item !== filterprod));
    } else {
      setSelectedProduct([...selctedProduct, filterprod]);
    }
  };
  const filteredProduct =
    selctedProduct.length === 0
      ? mobileData
      : mobileData.filter((vari) => selctedProduct.includes(vari.company));
  return (
    <div className="d-flex">
      <div className="flex-row">
        <h2>Mobiles</h2>
        {mobileData.map((phone) => {
          return (
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selctedProduct.includes(phone.company)}
                  onChange={() => companyHandler(phone.company)}
                />
                {phone.company}
              </label>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-wrap  gap-4 flex-row">
        {filteredProduct.map((item) => {
          return (
            <div>
              <Link to={`/mobiles/${item.id}`}>
                <div key={item} className="m-auto ">
                  <img src={item.image} alt="img" />
                </div>
              </Link>
              <div className="">
                {item.company}, {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobiles;
