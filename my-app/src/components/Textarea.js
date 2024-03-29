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

    const handleclear=()=>{
        settext("");
    }

    const handlecopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    
    const speak_lang=()=>{
      let speech = new SpeechSynthesisUtterance();
      speech.text = text;
      window.speechSynthesis.speak(speech);
    }

    return (
    <>
      <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleupchange} style={{backgroundColor: props.mode==='light'?'white':'#43966f',color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' id='uppercase' onClick={handleupclick}    style={{backgroundColor: props.mode==='light'?'blue':'#43966f'}}>Convert to uppercase</button>

        <button className='btn btn-primary mx-2' id='lowercase' onClick={handledownclick}    style={{backgroundColor: props.mode==='light'?'blue':'#43966f'}}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' id='clear' onClick={handleclear}    style={{backgroundColor: props.mode==='light'?'blue':'#43966f'}}>Clear</button>
        <button className='btn btn-primary mx-2' id='copy' onClick={handlecopy}    style={{backgroundColor: props.mode==='light'?'blue':'#43966f'}}>Copy text</button>
        <button className='btn btn-primary' onClick={speak_lang}    style={{backgroundColor: props.mode==='light'?'blue':'#43966f'}}>Speak</button>

       
     </div>

     <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>text details</h1>
      <p>{text.split(" ").length} wordcount and {text.length} charcount</p>
      <p>it takes {0.008*text.length}min to read the content</p>
      <h2>PREVIEW</h2>
      <p>{text.length>0?text:"Enter something in textbox above to preview that here"}</p>
     </div>

     
    </>
  )
}