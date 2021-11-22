import './App.css';
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    if(count > 0) {
      setCount(count - 1);
    } 
  }
  
  function increment() {
    setCount(count + 1); 
    
  }
  
  const getBackgroundColor = () => {
    let color ='red';
    if (count % 2 === 0) {
      color = 'red';
    } else {
      color = 'blue';
    }
    return color;
};

  return (
    <div className="App" style={ { backgroundColor: getBackgroundColor() } }>
      <div className="current-number">{count}</div>
      <div>
        { count % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число' }
      </div>
      
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
