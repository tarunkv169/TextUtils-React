import React,{useState} from 'react'

export default function Textarea(props) {
    const[text,settext]=useState("")

    const handleupclick=()=>{
        const newtext = text.toUpperCase();
        settext(newtext);
        props.text_alert("text is convert to uppercase","success");
      }
      
      const handledownclick=()=>{
        const newtext = text.toLowerCase();
        settext(newtext);
        props.text_alert("text is convert to lowercase","success");
      }
      
      const handleupchange=(event)=>{
        settext(event.target.value);
      }
      
      const handleclear=()=>{
        settext("");
        props.text_alert("text is cleared","success");
      }
      
      const handlecopy=()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.text_alert("text is copy to clipboard","success");
    }
    
    const speak_lang=()=>{
      let speech = new SpeechSynthesisUtterance();
      speech.text = text;
      window.speechSynthesis.speak(speech);
    }


    const textareaStyle = {
      backgroundColor: props.mode === 'light' ? 'white' : '#585555',
      color: props.mode === 'light' ? 'black' : 'white',
  };


  

    return (
    <>
      <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleupchange} style={textareaStyle} ></textarea>
        </div>
        <button disabled={text.length===0} className='button1 mx-1' id='uppercase' onClick={handleupclick}    style={{backgroundColor: props.mode==='light'?'blue':'#f5d33b',color: props.mode==='light'?'white':'black'}}>Convert to uppercase</button>

        <button disabled={text.length===0} className='button2 mx-1' id='lowercase' onClick={handledownclick}    style={{backgroundColor: props.mode==='light'?'blue':'#f5d33b',color: props.mode==='light'?'white':'black'}}>Convert to lowercase</button>
        <button disabled={text.length===0} className='button3 mx-1' id='clear' onClick={handleclear}    style={{backgroundColor: props.mode==='light'?'blue':'#f5d33b',color: props.mode==='light'?'white':'black'}}>Clear</button>
        <button disabled={text.length===0} className='button4 mx-1' id='copy' onClick={handlecopy}    style={{backgroundColor: props.mode==='light'?'blue':'#f5d33b',color: props.mode==='light'?'white':'black'}}>Copy text</button>
        <button disabled={text.length===0} className='button5 mx-1' onClick={speak_lang}    style={{backgroundColor: props.mode==='light'?'blue':'#f5d33b',color: props.mode==='light'?'white':'black'}}>Speak</button>

       
     </div>

     <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h3 className='head_about' my-15>Text Details</h3>
      <p className='textutils_about'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} wordcount and {text.length} charcount</p>
      <p className='textutils_about'>it takes {0.008*text.length}min to read the content</p>
      <h3 className='head_about' my-2>Preview</h3>
      <p className='textutils_about'>{text.length>0?text:"Nothing to preview"}</p>
     </div>

     
    </>
  )
}