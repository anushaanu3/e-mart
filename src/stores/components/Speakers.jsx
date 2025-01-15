import React from "react";
import { speakerData } from "../data/speaker";
const Speakers = () => {
  return (
    <div>
      <div>
        <h2>Speakers</h2>
      </div>
      <div className="d-flex flex-wrap  gap-4">
        {speakerData.map((item) => {
          return (
            <div>
              <div key={item} className="m-auto ">
                <img src={item.image} alt="img" />
              </div>
              <div className="">
                {item.brand}, {item.model}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speakers;
