
import './App.css';
import { Navbar } from './components/Navbar';
import { FormField } from './components/FormField';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light")

  const ch_mode= () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= "#484848";
    }
    if(mode=== 'dark'){
      setMode('light')
      document.body.style.backgroundColor= "white";
    }
  }

  return (
    <>
<Navbar mode={mode} ch_mode= {ch_mode} />
<FormField mode={mode}/>
    </>
  );
}

export default App;
