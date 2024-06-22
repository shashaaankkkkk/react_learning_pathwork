import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Button from './components/button'
import Array_ren from './components/rendering_array'
import Object_array_ren from './components/object_of_array'
import Counter from './components/Counter'
import TodoList from './components/Todo'
import WeatherWidget from './components/Weather'
import NameForm from './components/Form'
import Modal from './components/Modal'
import Card from './components/Card'
import Accordion from './components/Accodian'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Accordion></Accordion>
    <Modal></Modal>
    <Card></Card>
    <NameForm/>
    <Counter></Counter>
< TodoList/>
<WeatherWidget/>
  <div>
    <h1>All the Learning here! 🔥 </h1>
    <Hello name="something"/>
    <Button/>
    <Object_array_ren/>
    <h1>hello</h1></div></>
)
}


export default App;
