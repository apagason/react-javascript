import React from "react";
import { useState } from "react";

function CheckWithin100to500() {
  const [input, setInput] = useState("");

  const getNumber = () => {
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }

    let isWithin = "false";
    for (let i = 100; i <= 500; i++) {
      if (i === parseInt(input)) {
        isWithin = "true";
      }
    }

    return isWithin;
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
          <h1 className="text-primary">{getNumber()}</h1>
        </div>
      </div>
    </div>
  );
}

export default CheckWithin100to500;
