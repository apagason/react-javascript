import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol className="list-group">
        <li className="list-group-item">
          Click the title to navigate to the page
        </li>

        <li className="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li className="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/multiplication-table">Multiplication Table</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/sum-of-natural-numbers">Sum Of Natural Numbers</Link>
        </li>
        <li className="list-group-item list-group-item-success">
          <Link to="/sum-of-digits-in-a-string">Sum Of All Digits</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/check-whithin-100-to-500">Check Within 100 to 500</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/right-triangle">Right Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/triangle">Isosceles Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/number-right-triangle">Number Right Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/count-the-numbers-of-vowels">
            Count The Number Of Vowels
          </Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/number-triangle">Number Triangle</Link>
        </li>
        <li className="list-group-item list-group-item-secondary">
          <Link to="/random-name-generator">Random Name Generator</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
