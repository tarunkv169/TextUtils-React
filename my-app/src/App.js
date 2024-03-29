// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';

// import { StyleSheet, Text, View } from 'react-native'
import React,{ useState } from 'react';


// const styles = StyleSheet.create({})
function App() {


  const [mode,setMode] = useState('light');

  const togglemode=()=>{
    
      if(mode==='dark')
      {                                               // always remmeber while func call onclick={---},style={mystyle} etc 
        setMode('light'); 
        document.body.style.backgroundColor='white'                               // for setmode('---')
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor='#0a3622'                               // for setmode('---')
      }
    
  }

  return (
    <>
      <Navbar title='textutils' mode={mode} togglemode={togglemode}/>

      <div className='container mb-3'>
         <Textarea heading="Enter text here to analyze"   mode={mode} togglemode={togglemode} />
      </div>
{/* 
      <div className='container my-3'>
          <About/>
      </div> */}
    </>
  );
}

export default App;
