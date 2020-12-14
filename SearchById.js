import React,{useState, useEffect} from 'react';
import axios from 'axios';

const SearchById = () => {
    const [posts, updatePosts] = useState([])
    const [id, setId] = useState(1)
    useEffect(()=>{
     let getdata = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     getdata.then(res =>{
        updatePosts(res.data)
     })
     .catch(error => console.log(error))
    },[id])
    return ( 
        <>
            <ul>
            <input value={id} onChange={(e)=>setId(e.target.value)} type='text'/>
                {
                <>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                </>
                
                }
            </ul>
        </>
     );
}
 
export default SearchById;