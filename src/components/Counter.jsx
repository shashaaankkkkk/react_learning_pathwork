import React, { useState } from 'react'

const Counter=()=> {
    const [Count,setCount] = useState([<></>])

    console.log(Count)
  

  return (
    <div>
    <div>Counter - {Count}</div>
    <button onClick={()=>{setCount(Count+[<h1>hi</h1>])}}>increment</button>
    </div>
  )
}

export default Counter;
