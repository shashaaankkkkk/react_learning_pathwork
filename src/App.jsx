import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Button from './components/button'
import Array_ren from './components/rendering_array'
import Object_array_ren from './components/object_of_array'
import Counter from './components/Counter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter></Counter>
    </>
  // <div>
  //   <h1>All the Learning here! 🔥 </h1>
  //   <Hello name="something"/>
  //   <Button/>
  //   <Object_array_ren/>
  //   <h1>hello</h1></div>
)
}


export default App;
