import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter]=useState(10);
  const addvalue= ()=>{
    if(counter>20){
      setcounter(20)
    }else{
       setcounter(counter+1);
    }
   
  }

  const removevalue= ()=>{
    if(counter<0){
      setcounter(0)
    }else{
      setcounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Addvalue</button>
      <button onClick={removevalue}>removevalue</button>
    </>
  )
}

export default App
