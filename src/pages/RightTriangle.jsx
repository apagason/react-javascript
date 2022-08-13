import { useState } from "react";

function RightTriangle() {
  const [input, setInput] = useState("");

  let first = "*";
  const sequence = [];

  const generateRightTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return <h1 className="text-primary">Please enter a number</h1>;
    }

    for (let i = 1; i <= input; i++) {
      sequence.push(first);

      first = first.concat(" ", "*");
    }

    return sequence.map((data, index) => (
      <h2 className="text-primary" key={index}>
        {data}
      </h2>
    ));
  };

  return (
    <div className=" container p-5">
      <div className="row">
        <div className="col-12 w-58 pb-5">
          <input
            type="text"
            className="w-180 lead"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="text-primary">{generateRightTriangle()}</div>
      </div>
    </div>
  );
}

export default RightTriangle;
