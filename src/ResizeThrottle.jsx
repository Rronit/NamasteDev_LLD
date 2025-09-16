import React,{useState,useEffect,useRef} from 'react';

function useResize(delay=200){
function getInfo(){
  return {
    height: window.innerHeight,
    width: window.innerWidth
  }
}
  const [screenInfo,setScreenInfo]=useState({})
  const timer = useRef(null);
  useEffect(()=>{
    function throttleSize(){
       clearTimeout(timer.current)
      console.log("DDd",timer.current,delay)
    if(timer.current){
      // clearTimeout(timer.current);
      timer.current=null
    }
    if(!timer.current){
      timer.current = setTimeout(()=>setScreenInfo(getInfo),delay)
    }
    }


    window.addEventListener('resize',throttleSize)
    return ()=>{
      window.removeEventListener('resize');
      if(timer.current){
        clearTimeout(timer.current)
      }
    }

  },[delay])
  return screenInfo;
}

export function App(props) {
  const {height,width}=useResize(2200);
  return (
    <div className='App'>
      <h1>Hello React {height}</h1>
      <h2>Start editing to see some magic {width}!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')
