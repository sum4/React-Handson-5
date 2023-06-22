import React, { useState } from 'react'
import MyPureComponent from './Components/MyPureComponent'
import ClickCounter from './Components/ClickCounter';
import HoverComponent from './Components/HoverComponent';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const Increment = () => {
    setCount(count + 1);
  }
  return (
    <div className='main'>
      <h1 className='heading'>React Handson 5</h1>
      <div>
        <h1>This is created using PureComponent</h1>
        <MyPureComponent value={count} />
        <button onClick={Increment}>Update</button>
      </div>
      <h1>This is created using HOC onClick</h1>
      <ClickCounter />
      <h1>This is created using HOC onMouseOver</h1>
      <HoverComponent />
    </div>
  )
}

export default App