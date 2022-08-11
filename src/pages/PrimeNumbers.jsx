import React, { useState } from "react";

function PrimeNumbers() {
  const [input, setInput] = useState(1);

  const checkIfPrimeNumber = (number) => {
    let isPrime = true;

    // Check Number
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    // Check if less than 1
    else if (number < 1) {
      return "The number is NOT a Prime Number.";
    }

    // Check if equal to 1
    else if (parseInt(number) === 1) {
      return "1 is neither prime nor a composite number.";
    }

    // Check if numbe is greater than 1
    else {
      for (let i = 2; i < number; i++) {
        if (parseInt(number) % i === 0) {
          isPrime = false;
          break;
        }
      }

      return isPrime
        ? `${number} is a prime number`
        : `${number} is NOT a prime number`;
    }
    return "testing";
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            className="w-100 lead"
            type="text"
            placeholder="Input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="col-md-5">
          <textarea
            className="w-100 lead text-primary"
            type="text"
            placeholder="Output"
            readOnly={true}
            value={checkIfPrimeNumber(input)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default PrimeNumbers;
