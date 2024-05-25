// import { useState } from "react"
// import { useState } from "react"
import React, {useState} from 'react'

export const FormField = (props) => {

    const onsubmitt = () => {
        let newtext= text.toUpperCase()
        setText(newtext)
    }

    const onsubmitt2 = () => {
        let newtext= text.toLowerCase()
        setText(newtext)
    }

    const onsubmitt3 = () => {
        let newtext= ""
        setText(newtext)
    }


    const handlechanged = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
    <h1 style={{color:  (props.mode === 'light') ? '#484848': 'white'}}> This is typerscripter</h1>
    <div className="container">

<div className="mb-3" >
  <label htmlFor="myform" className="form-label" style={{color:  (props.mode === 'light') ? '#484848': 'white'}}>Type Writer Helper built to test the ddark mode as well as JS Props types...</label>
  <textarea className="form-control" id="myform" onChange={handlechanged} value={text} rows="3" style={{background:  (props.mode === 'light') ? 'white' :'#484848'}}></textarea>
</div>
<button className={`btn btn-${props.mode === 'light' ? 'warning' : 'secondary'} mx-1`} onClick={onsubmitt} > Upper Case</button>
<button className={`btn btn-${props.mode === 'light' ? 'warning' : 'secondary'} mx-1`} onClick={onsubmitt2} > Lower Case</button>
<button className={`btn btn-${props.mode === 'light' ? 'warning' : 'secondary'} mx-1`} onClick={onsubmitt3} > Clear</button>
 <div style={{margin: '20px', color:  (props.mode === 'light') ? '#484848': 'white'}}>
 <h2>Preview your text</h2>
   <p> { text.length>0 ? text : ""}</p>
   </div>
  
    </div>

    </>



  )
}
