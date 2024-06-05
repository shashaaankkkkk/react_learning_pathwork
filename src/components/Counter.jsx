import React, { useState } from 'react'

const Counter=()=> {
    const [Count,setCount] = useState(0)

    console.log(Count)
  

  return (
    <div>
    <div>Counter - {Count}</div>
    <button onClick={()=>{setCount(Count+2)}}>increment</button>
    <button onClick={()=>{setCount(Count-1)}}>Decrement</button>
    </div>
  )
}


export default Counter;
