import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components2/Hello'

function App() {
 useEffect(()=>{
console.log("hello");
 },[]);
  return (
    <>
    <div>

      <img src="https://www.collinsdictionary.com/images/thumb/shirt_378037390_250.jpg?version=6.0.55" alt="" />
</div>
      <h1>shirt1</h1>
      <h1>this is cart</h1>


    </>
)
}


export default App;
