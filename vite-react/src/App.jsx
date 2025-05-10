import { useState } from "react"

function App() {

  //let counter = 5

  let [counter, setCounter] = useState(5)

  

  const addvalue = () => {
    //console.log("value: ",counter)
    if(counter < 20){
      counter = counter + 1
    }
    setCounter(counter)
  }

  const decrease = () => {
    
    if(counter >= 1) counter--
    setCounter(counter)
    //console.log("value: ",counter)
  }

  return (
    <>
    <h1>Vite React APP</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addvalue}> Add Value</button>
    <br></br>
    <button onClick={decrease}>Decrease Value</button>
    </>

  )
}

export default App
