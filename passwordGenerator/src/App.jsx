import { useState, useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@##%^&*()"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, charAllowed, numberAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passRef.current?.select()
    //passRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
    
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 w-full max-w-md rounded-xl shadow-lg px-6 py-8">
        <h1 style={{ color: 'white' }} className="text-center text-2xl font-bold mb-6">
  Password Generator
</h1>

        
        <div className="flex shadow rounded-lg overflow-hideen mb-4 ">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Your password"
            className="w-full p-3 text-lg text-black bg-white focus:outline-none"
            ref={passRef}
          
          />
          <button
            style={{backgroundColor: 'blue', color: 'white'}}
            onClick={copyPasswordToClipboard}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 font-semibold"
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            onChange={(e) => {setLength(e.target.value)}}
            type="range"
            min={6}
            max="100"
            value={length}
            className='cursor-pointer'/>
            <label
            style={{color: 'white'}}>Length: {length}</label>
          </div>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}/>
          <label
          htmlFor='numberInput'
            style={{color: 'white'}}>Numbers</label>

          <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}/>
          <label
          htmlFor='numberInput'
            style={{color: 'white'}}>Character</label>
        </div>

        </div>
              
      </div>
    </div>
  )
}

export default App
