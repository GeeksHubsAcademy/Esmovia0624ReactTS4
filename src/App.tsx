
import { useState } from 'react'
import './App.css'
import CInput from './common/CInput/CInput'

function App() {
  
  const [value, setValue] = useState<string>("")

  const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {

    setValue(e.target.value)
  }

  return (
    <>
      <CInput 
        type={"text"}
        name={"value"}
        design={"input-design"}
        placeholder={""}
        onChange={inputHandler}
      />
      {value}
    </>
  )
}

export default App
