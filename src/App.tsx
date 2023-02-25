import React, {MouseEvent, useState} from 'react';
import './App.module.css';
import {Button} from "./components/Button";


function App() {

  let [counter, setCounter] = useState(0)

  const onclickHandler = () => {
    setCounter(counter + 1)

  }

  const onclickHandler0 = () => {
    setCounter(0)
  }

  return (
      <div className="App">
        <div>{counter}</div>
        <button onClick={onclickHandler} disabled={counter === 5}>inc</button>
        <button onClick={onclickHandler0} disabled={counter === 0}>reset</button>
      </div>
  )
}


export default App;
