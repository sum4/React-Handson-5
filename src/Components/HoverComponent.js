import React from 'react'
import HigherOrderComp from './HigherOrderComp';

function HoverComponent({count,increment}) {
  return (
    <div>
        <h1>Count : {count} </h1>
        <button onMouseOver={increment}>Update</button>
    </div>
  )
}

export default HigherOrderComp(HoverComponent);