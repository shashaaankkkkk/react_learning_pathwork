import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount("hi");
  const decrement = () => setCount("hello");
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <div>
        <button 
          onClick={increment} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '5px',
          }}
        >
          add to cart
          
        </button>
        <button 
          onClick={decrement} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '5px',
          }}
        >
          Decrease
        </button>
        <button 
          onClick={reset} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '5px',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
