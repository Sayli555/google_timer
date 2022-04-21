import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time,setTime]=useState(0);
  const [timeron,setTimon]=useState(false);

  useEffect(()=>{
    let interval=null;
    if(timeron){
      interval=setInterval(()=>{
        setTime(pr=>pr+10)
      },10)
    }
    else{
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[timeron])



  return (
    <div className="App">
     <div>
       <span>{("0" +Math.floor((time/60000)%60)).slice(-2)}:</span>
       <span>{("0" +Math.floor((time/1000)%60)).slice(-2)}:</span>
       <span>{("0" +((time/10)%100)).slice(-2)}</span>
     </div>
     <div>
       {/* <button onClick={()=>setTimon(true)}>Start</button>
       <button onClick={()=>setTimon(false)}>Stop</button>
       <button onClick={()=>setTimon(true)}>Resume</button>
       <button onClick={()=>setTime(0)}>Reset</button> */}

       {!timeron && time===0 && (
         <button onClick={()=>setTimon(true)}>Start</button>
       )}
        {timeron && (
         <button onClick={()=>setTimon(false)}>Stop</button>
        )}
        {!timeron && time!==0 &&(
         <button onClick={()=>setTimon(true)}>Resume</button>
         ) }
        {!timeron && time>0  &&(
         <button onClick={()=>setTime(0)}>Reset</button>
        )}
       
       
     </div>
    </div>
  );
}

export default App;
