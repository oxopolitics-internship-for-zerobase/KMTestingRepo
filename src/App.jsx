import React, { useState } from "react";
// 주석!
import "./App.css";
// 주석!
import {
  // 주석!
  faCheckSquare,
  // 주석!
  faSpinner,
  // 주석!
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// 주석!
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 주석!
import TestCompo from "./components/TestCompo";

function App() {
  const [ccount2, setCCount2] = useState(0);
  const [ccount3, setCCount3] = useState(0);
  return (
    <>
      <div className="App">
        <FontAwesomeIcon icon={faBars} />
        <TestCompo />
        <p>tltltltl</p>
      </div>

      <div className="cards">
        <button onClick={() => setCCount2((ccount2) => ccount2 + 1)}>
          count is {ccount2}
        </button>
        <button onClick={() => setCCount3((ccount3) => ccount3 - 1)}>
          count is {ccount3}
        </button>
      </div>
      <div>
        c1: {ccount2} / c2: {ccount3}
      </div>
    </>
  );
}

export default App;
