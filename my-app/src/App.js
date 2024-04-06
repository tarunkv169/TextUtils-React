// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import Alerts from './components/Alerts';
import Textarea from './components/Textarea';
import About from './components/About';

// import { StyleSheet, Text, View } from 'react-native'
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// const styles = StyleSheet.create({})
function App() {
  const [mode,setMode] = useState('light');
  const [alerttt,setalerttt] = useState(null);

  const showalert=(msg,type)=>{
      setalerttt({
        msg: msg,
        type: type
      })

      setTimeout(()=>{
        setalerttt(null)
      },1500)
  }

  const togglemode=()=>{
      if(mode==='dark')
      {                                               // always remmeber while func call onclick={---},style={mystyle} etc 
        setMode('light'); 
        document.body.style.backgroundColor='#cccaca'; 
        showalert(" Dark mode disabled","success");                            // for setmode('---')
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor='black';                               // for setmode('---')
        showalert(" Dark mode enabled","success");                            // for setmode('---')
      }
  }



  return (
    <>
    <Router>
      <Navbar title='Textutils' mode={mode} togglemode={togglemode} />
      <Alerts  alert={alerttt} />
      <div className='container mb-3'>
      {/* <Textarea  text_alert={showalert} heading="Enter text here to analyze"   mode={mode} togglemode={togglemode} /> */}
        <Routes>
          <Route element={<About mode={mode} togglemode={togglemode}/>} path="/About"></Route>
          <Route element={<Textarea  text_alert={showalert} heading="TextUtils - Word Counter, Character Counter,Remove extra spaces" mode={mode} togglemode={togglemode} />} path="/"></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
