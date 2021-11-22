import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    if(count > 0) {
      setCount(count - 1);
    } 
  }

  return (
    <div className="App">
      <div className="current-number">{count}</div>
      <div>{ count % 2 == 0 ? 'Введено четное число' : 'Введено нечетное число' }</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
