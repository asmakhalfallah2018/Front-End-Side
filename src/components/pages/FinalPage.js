import React, { Component } from 'react';
import './App.css';



  
class FinalPage extends Component {

  constructor(props) {
    super(props);
     this.state = { rs:[
     
     ]
     
     }
   }
render() {
      console.log(this.props.location.state.rs)
      return (
        <div>
        <div id="body">
        <h1>Analysis Report</h1>
         <br/>
         <br/>
         </div>
        <div>
          
        
        <br/>
        <br/> 

        <br/>  <div id="centre">
        <div id="bandeau"></div>
<div id="contenu">{this.props.location.state.rs}</div>
<div id="piedpage"></div></div>
      
        <br/>

   
     <br/>
     <br/>
     <br/>
     </div>
     <br/>
     <br/>

      </div>
      );
    }
  }
  
  export default FinalPage;
  