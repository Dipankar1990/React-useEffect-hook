import React,{useState, useEffect} from 'react';
import axios from 'axios';

const SearchByOnClick = () => {
    const [posts, updatePosts] = useState([])
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)
    useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
     .then(res =>{
        updatePosts(res.data)
     })
     .catch(error => console.log(error))
    },[buttonClick])
    return ( 
        <>
            <ul>
            <input value={id} onChange={(e)=>setId(e.target.value)} type='text'/>
            <button onClick={()=>{setButtonClick(id)}}>Fetch Post</button>
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
 
export default SearchByOnClick;