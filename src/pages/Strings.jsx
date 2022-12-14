import React from "react";
import { useState } from "react";

function Strings() {
  const [input, setInput] = useState("");

  const getReverseString = () => {
    return input
      .split("")
      .reverse("")
      .join("")
      .split(" ")
      .reverse("")
      .join(" ");
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
          <h1 className="text-primary">{getReverseString()}</h1>
        </div>
      </div>
    </div>
  );
}

export default Strings;
