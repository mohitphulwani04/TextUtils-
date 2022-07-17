//import logo from './logo.svg';                      {note : margin my-3 provided by container class}
import  React,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import Alerrts from './Components/Alerrts';
import Navbar from './Components/Navbar';
import Textforms from './Components/Textforms';
import {
  BrowserRouter as Router,
  Routes,
  Route
// , Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
          setAlert({
        message : message ,
        type : type
      });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
  } 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#75CAC3';
      showAlert('Dark mode has been enabled' , 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled' , 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils"  aboutText = "About" mode = {mode} toggleMode = {toggleMode} />
        <Alerrts alert = {alert}/>
        <div className="container my-3"> 
          <Routes>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/" element={<Textforms showAlert = {showAlert} heading = "ENTER THE TEXT TO ANALYZE BELOW " mode={mode} />} >
              </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
