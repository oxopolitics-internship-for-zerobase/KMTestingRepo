import React, { useState } from 'react'
import './App.css'
import { faCheckSquare, faSpinner, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestCompo from './components/TestCompo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div>ddd{count}</div>
      <FontAwesomeIcon icon={faBars} />
      <TestCompo />
      <p>tltltltl</p>
    </div>
  )
}

export default App
