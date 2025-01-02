import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components2/Hello'

function App() {
  const [cart , setcart]=useState(0)
  let cond=''
  if(cart%2==0){
    cond="even"
  }else{
    cond="odd"
  }
  return (
    <>
    <div>
      <>value is {cond}</>
      <img src="https://www.collinsdictionary.com/images/thumb/shirt_378037390_250.jpg?version=6.0.55" alt="" />
    <button onClick={()=>{setcart(cart + 1 )}}>add to cart</button></div>
      <h1>shirt1</h1>
      <h1>this is cart</h1>
    <h1>{cart}</h1>
    <Hello llo="hello , Satuuriya" second="second item" />
    </>
)
}


export default App;
