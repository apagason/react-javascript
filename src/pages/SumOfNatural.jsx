import React from "react";
import { useState } from "react";

function SumOfNatural() {
  const [input, setInput] = useState("");

  const getSumOfNatural = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }

    let total = 0;
    for (let i = 1; i <= input; i++) {
      total = total + i;
    }

    return total;
  };

  return (
    <div className=" container p-5">
      <div className="row">
        <div className="col-12 w-58 pb-5">
          <input
            type="text"
            className="w-180 lead"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        <div>
          <h1 className="text-primary">{getSumOfNatural()}</h1>
        </div>
      </div>
    </div>
  );
}
export default SumOfNatural;
