import React,{useState} from 'react';
import MousePoint from './MousePoint'
const UseToggle = () => {
    const [display, setDisplay] = useState(true)

    return ( <>

        <button onClick={() =>{setDisplay(!display)}}>Display Toggle</button>
        {display && <MousePoint/>}
    </> );
}
 
export default UseToggle;