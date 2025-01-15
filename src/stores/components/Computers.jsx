import React from "react";
import { computerData } from "../data/computers";

const Computers = () => {
  return (
    <div>
      <div>
        <h2>Computers</h2>
      </div>
      <div className="d-flex flex-wrap  gap-4">
        {computerData.map((item) => {
          return (
            <div>
              <div key={item} className="m-auto ">
                <img src={item.image} alt="img" />
              </div>
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

export default Computers;
