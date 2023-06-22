import React from 'react'
import HigherOrderComp from './HigherOrderComp';

function ClickCounter({count,increment}) {
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default HigherOrderComp(ClickCounter)