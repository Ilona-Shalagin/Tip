
import {useState,useEffect } from 'react';
import './App.css';
import rocket from './rocket.jpg'

function App() {

  const[advice,setAdvice] = useState('');
  
  useEffect (()=>{
    updateAdvice();
  },[])

    const  updateAdvice = async ()=> {
    const response = await fetch(`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    console.log(data)
    setAdvice(data.activity);
  }
  
  return (
    <div className="App">
      <div className="top">
    <h1>Productive things to do with your spare time.</h1>
    </div>
    <div className="container">
      <p>{advice}</p>
    <button onClick={updateAdvice}className="btn">Click</button>
    </div>
    <img src={rocket} alt="sign"/>
    </div>
    
    
    
  );
}

export default App;
