import React, { useState } from 'react'

const Calcutor = () => {
    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [result, setresult] = useState(0)
    const bgColor = `rgb(${n1 % 255}, ${n2 % 255}, ${255})`;
    
    const sum = () => {
        setresult (+n1 + +n2)
    }
    const abstract = () => {
        setresult (+n1 - +n2)
    }
    const divide = () => {
        setresult (+n1 / +n2)
    }
    const multiply = () => {
        setresult (+n1 * +n2)
    }
  return (
    <div>Calcutor<br/>
        <input onChange={(e) => setn1(e.target.value)}/><br/>
        <input onChange={(e) => setn2(e.target.value)}/><br/><br/>
        <button style={{ backgroundColor: bgColor }} onClick={sum}>sum</button>{" | "}
        <button style={{ backgroundColor: bgColor }}onClick={abstract}>abstract</button>{" | "}
        <button style={{ backgroundColor: bgColor }}onClick={divide}>divide</button>{" | "}
        <button style={{ backgroundColor: bgColor }}onClick={multiply}>multiply</button><br/><br/>
        result = {result}<br/>

    </div>
  )
}

export default Calcutor