import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components2/Hello'
import Sounter from './components2/Sounter'
import { Count } from './context/Counter'
function App() {
 const countstate=useContext(Count);
 console.log(countstate)
  return (
    <>
    {/* <div>

      <img src="https://www.collinsdictionary.com/images/thumb/shirt_378037390_250.jpg?version=6.0.55" alt="" />
</div>
      <h1>shirt1</h1>
      <h1>this is cart</h1> */}

      <h1>count is {countstate.count_1}</h1>
      <Sounter/><br />
      <Sounter/><br />
      <Sounter/><br />
      <Sounter/><br />
    </>


 
)
}


export default App;
