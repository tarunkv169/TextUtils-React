import React,{useState} from 'react'

export default function Textarea(props) {
    const[text,settext]=useState("this is something here")

    const handleupclick=()=>{
        console.log("button is clicked for uppercase" + text);
        const newtext = text.toUpperCase();
        settext(newtext);
    }

    const handleupchange=(event)=>{
        console.log("change is called");
        settext(event.target.value);
    }

    return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleupchange}></textarea>
        </div>
        <button className='button1' id='uppercase' onClick={handleupclick}>Convert to uppercase</button>
     </div>
    </>
  )
}
