import React, { useState } from 'react'

function HigherOrderComp(OriginalComponent) {
    const NewComp=()=>{
    const [count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
  return <OriginalComponent count={count} increment={Increment} />
 }   
 return (NewComp);
}
export default HigherOrderComp