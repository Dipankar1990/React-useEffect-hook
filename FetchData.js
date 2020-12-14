import React,{useState, useEffect} from 'react';
import axios from 'axios';

const FetchData = () => {
    const [posts, updatePosts] = useState([])
    const [error, updateError] = useState("")
    useEffect(()=>{
        console.log('ugug')
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res =>{
        console.log(res)
      
        if(res.status === 200){
            
            updatePosts(res.data)
        
        }else{
            updateError('Some error Found');
        }

     })
     .catch(error =>  updateError('Some error Found'))
    },[])
    return ( 
        <>
            <ul>
                {
                    posts.map(posts =>{
                        return <li key={posts.id}>
                            <h1>{posts.title}</h1>
                            <p>{posts.body}</p>
                        </li>
                    })

                }
                <h1>{error}</h1>
            </ul>
        </>
     );
}
 
export default FetchData;