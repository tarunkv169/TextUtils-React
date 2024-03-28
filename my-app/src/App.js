// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
function App() {
  return (
    <>
      <Navbar/>
      <div className='container mb-3'>
         <Textarea heading="Enter text here to analyze"/>
      </div>
    </>
  );
}

export default App;
