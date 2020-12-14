import React, { Component } from 'react';

class JsonData extends Component {
   eyyye (){
        let datapromise = fetch('https://jsonplaceholder.typicode.com/posts');
        let mydata = [];
         datapromise.then(res => {
           
            return res.json()})
        .then( data => {
            let i = 0;
            data.map(post =>{
                mydata[i] = post;
                i++;
            });
            
        } );
        return mydata;
        }

    state = {  }
    
    render() { 
        const allpost = '';
        {
            this.eyyye ().map(post =>{
                console.log(post.title);
                allpost += '<h1>'+post.title+'<h1>';
            });
        }
        return ( 
            <>
           
            {
                allpost 
            }
            </>
           
         );
    }
}
 
export default JsonData;