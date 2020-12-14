import React,{useState, useEffect} from 'react';
import axios from 'axios';
const DataAlbums = () => {
    const [albums, updateAlbums] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
       .then(res => {
        console.log(res)   
        updateAlbums(res.data)
    })
       .catch(error =>console.log(error))
    },[])
    return ( 
       <>
           <ul>
               {albums.map(albums =>{
                 return   <li key={albums.id}>
                             <h1>{albums.title}</h1>
                             <img src={albums.url}></img>
                             
                          </li>
               })}
           </ul>
       </>
     );
}
 
export default DataAlbums;