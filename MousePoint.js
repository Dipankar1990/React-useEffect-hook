import React,{useState, useEffect} from 'react';
const MousePoint = () => {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logmouseover = (e) =>{
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() =>{
        window.addEventListener('mouseover', logmouseover )
        console.log('use effect called')

        return () =>{
            window.removeEventListener('mouseover', logmouseover )
            console.log('use effect removed')
        }
    },[])
    
    return ( 
    <>
    <p>
        x:{x}, y:{y}
    </p>
    </> );
}
 
export default MousePoint;