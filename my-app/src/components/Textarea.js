import React,{useState} from 'react'

export default function Textarea(props) {
    const[text,settext]=useState("")

    const handleupclick=()=>{
        console.log("button is clicked for uppercase" + text);
        const newtext = text.toUpperCase();
        settext(newtext);
    }

    const handledownclick=()=>{
      console.log("button2 is clicked for lowercase");
      const newtext = text.toLowerCase();
      settext(newtext);
    }

    const handleupchange=(event)=>{
        console.log("change is called");
        settext(event.target.value);
    }

    return (
    <>
      <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleupchange}></textarea>
        </div>
        <button className='button1 mx-3' id='uppercase' onClick={handleupclick}>Convert to uppercase</button>

        <button className='button2 mx-3' id='lowercase' onClick={handledownclick}>Convert to lowercase</button>
     </div>

     <div className="container my-3">
      <h1>text details</h1>
      <p>{text.split(" ").length} wordcount and {text.length} charcount</p>
      <p>it takes {0.008*text.length}min to read the content</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
     </div>

     
    </>
  )
}
