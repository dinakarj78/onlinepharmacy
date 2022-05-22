import './App.css'; 
import React, { Component } from 'react';
import  axios from 'axios';

class Fetch extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      buttonClicked: false
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4000/getData')
    .then((res) =>{
     this.setState({
         data: res.data
     })
    });
}

 render(){
   return(
     this.state.data.map( (data)=>{
        return(
          <div key={data}> 
            <p >{data.name}</p>
            <p>{data.year}</p>
          </div>
        )
     })
   );}
}
export default Fetch;
