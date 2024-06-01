import React, { useState } from 'react'

const Counter=()=> {
    const [Count,setCount] = useState(0)

    console.log(Count)
  

  return (
    <div>
    <div>Counter - a{Count+1}</div>
    <button onClick={()=>{setCount(Count+1)}}>increment</button>
    </div>
  )
}


export default Counter;
