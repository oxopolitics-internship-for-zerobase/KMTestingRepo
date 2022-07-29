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
  const [count11, setCount11] = useState(0);
  const [count112, setCount112] = useState(0);
  const [count113, setCount113] = useState(0);

  return ( 
    <>
      <div>
        <p>이소윤 충돌</p>
      </div><div>
        <p>이소윤 충돌</p>
      </div><div>
        <p>이소윤 충돌</p>
      </div><div>
        <p>이소윤 충돌</p>
      </div><div>
        <p>이소윤 충돌</p>
      </div>
      <div>
        <p>이소윤 충돌</p>
      </div>

    </>
  );
}

export default App;
