import React, { Component } from 'react';
class UeClass extends Component {
    state = { 
        count:0
     }
    componentDidMount(){
        document.title = `clicked  ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `clicked  ${this.state.count} times`
    }


    render() { 
        return ( 
        <>
           <button onClick={()=>this.setState({count:this.state.count + 1})}  >Count:{this.state.count}</button>
        </> );
    }
}
 
export default UeClass;