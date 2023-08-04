import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { Routes, Route} from 'react-router-dom';
import Alert from './component/Alert'

export default function App() {
  const [Mode,setMode]=useState("white");
  const [alert,setAlert]=useState(null);

  const toggle=()=>{
    if(Mode==="white"){
      setMode("black");
      document.body.style.backgroundColor="#060f1c";
    }
    else{
      setMode("white");
      document.body.style.backgroundColor="white";
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1500)
    
  }
  return (
    <div>
      <Navbar mode={Mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className="container">
       <Routes>
        <Route path="/" element={<Home setAlert={setAlert} showAlert={showAlert} mode={Mode}/>} />
        <Route path="/about" element={<About mode={Mode}/>} />
        <Route path="/contact" element={<Contact mode={Mode}/>} />
       </Routes>
      </div>
    </div>
  )
}
