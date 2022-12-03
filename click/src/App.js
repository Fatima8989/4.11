import { React, useState } from 'react'
import "./App.css"
 
export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    if (counter<10){
    setCounter(count => count + 1);
    }
  };

  const decrease = () => {
    if (counter > -10) {
      setCounter(count => count - 1);
    }
  };

  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span>{counter}</span>
      <div className="btn__container">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}