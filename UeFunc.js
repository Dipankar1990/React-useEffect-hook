import React, {useState, useEffect} from 'react';
const UeFunc = () => {
  const[count, setCount] =  useState(0);
  const[inputval, updateinputval] =  useState("");
  useEffect(()=>{
    console.log('calling ');
    document.title = `clicked  ${count} times`
  },[])

    return ( <>
        <input type="text" value={inputval} onChange={(event)=>updateinputval(event.target.value)} />
        <button onClick={()=>setCount(count + 1)} >Count:{count}</button>
    </> );
}
 
export default UeFunc;