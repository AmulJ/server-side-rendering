import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

 const increment = ()=>{
  setCount(()=> count + 1)
 }

 const decrement = ()=>{
  setCount(()=> count - 1)
 }

  return (
    <div className="App">
      <button className='countButton' onClick={increment}>+</button>
      <div>{count}</div>
      <button  className='countButton' onClick={decrement}>-</button>
    </div>
  );
}

export default App;
