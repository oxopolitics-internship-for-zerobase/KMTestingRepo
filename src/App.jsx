import React, { useState } from "react";
import "./App.css";
import {
  faCheckSquare,
  faSpinner,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestCompo from "./components/TestCompo";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <>
      <div className="App">
        <div>ddd{count}</div>
        <FontAwesomeIcon icon={faBars} />
        <TestCompo />
        <p>tltltltl</p>
      </div>

      <div className="card">
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
        <button onClick={() => setCount3((count3) => count3 - 1)}>
          count is {count3}
        </button>
      </div>
    </>
  );
}

export default App;
