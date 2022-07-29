import React, { useState } from "react";
import "./App.css";
// import {
//   faCheckSquare,
//   faSpinner,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import TestCompo from "./components/TestCompo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  const [count11, setCount11] = useState(0);
  const [count112, setCount112] = useState(0);
  const [count113, setCount113] = useState(0);
  const doSomething = () => {
    setCount11(count11++);
    setCount112(count112++);
    setCount113(count113--);
  }

  return (
    <>
      <strong>{[count11, count112, count113]}</strong>
      <button onClick={doSomething()}>Click!</button>
    </>
  );
}

export default App;
