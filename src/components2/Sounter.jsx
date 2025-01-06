import React from 'react'
import { useContext } from 'react'
import { Count } from '../context/Counter';

function Sounter() {
  const countstate=useContext(Count);

  return (<>
    <button onClick={()=>countstate.setCount_1(countstate.count_1+1)}>Increment</button>
    <button onClick={()=>countstate.setCount_1(countstate.count_1-1)} >decrement</button>
    </>
)
}

export default Sounter