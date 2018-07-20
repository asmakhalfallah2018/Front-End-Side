import React from "react";
import './App.css';
import PropTypes from "prop-types";


const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg")',
  width:' 90%' ,
  height: '90%' ,
  textAlign: 'center'

}

class AccueilPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rs:[
     
      ]
     , 
      loading: false,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }
// Appel aux fonctions d'upload file analyse file 
  handleUpload(e) {
    e.preventDefault();
    const data = new FormData();
    
    data.append('file', e.target.files[0]);
 data.append('filename', "test");
    this.setState({
      loading: true,
    });
    fetch('http://localhost:8080/upload', { // Your POST endpoint
      method: 'POST',
      body: data
    })
    .then(
      response => {
        console.log(response);
        return response.json()
      } // if the response is a JSON object
    ).then(
      success => {
        console.log(success) // Handle the success response object
        this.setState({
         rs: success.rs,
          loading: false,
        })
      }
    ).catch(
      error => null // Handle the error response object
    );}
 
    // Redirection à la page finale : compte rendu de l'analyse
  onClick = (rs)=>{
     
    const data = document.getElementById('pdf').files[0]
    if(data){
      this.props.history.push("/final", {rs});
    }
    else {
      alert('There is no file to show . Please Upload a file ! ')
    }
   
  }
   // Fonction pour visualiser le PDF importé 
    onShow(e){

      var fileDownload = require('js-file-download');

     
      const data = document.getElementById('pdf').files[0]
if(data){
   fileDownload(data, document.getElementById('pdf').files[0].name);
}
else {
  alert('There is no file to show . Please Upload a file ! ')
}
  }    
  
  render() {
    return ( 
      <div>
    <div>

      <label><p style={{width:'70em'
    ,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginTop:'3em',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
    color:'white'}} > <h1>Steps of Parsing PDF file :</h1><ol type="1">

      <li>Import your PDF File</li>
      <li> Waiting until the Loader disappear</li>
      <li>Now you can Click the Parse PDF to visualise the Report Analysis of your PDF </li>
    </ol>

    
    
    
     </p></label>
      </div>
    
    
    
    <div style={body} >
    <br/>
    <br/>
    
      <br/>
      <br/>
      <br/>
          <form encType="multipart/form-data" >
          <input  id="pdf" type="file" onChange={this.handleUpload}  accept="application/pdf" />
          {
            this.state.loading &&
            <center>

              <div className="loader"></div>
            </center>
          }  

         
                  
                
          <br/>
          <br/>
         
            </form>
            <br/>
            
            <button style={{borderRadius: '15px', backgroundColor:'#D19275', padding: '12px 15px' ,boxShadow: '0 9px #999',cursor: 'pointer', color:'#800000'}} onClick={this.onShow}><span > View PDF </span></button>
    
            <br/>
            <br/>
            <br/>
            <button style={{display: 'inline-block',
  padding: '15px 25px' ,
  fontSize: '13px ',
  cursor: 'pointer',
  textAlign: 'center' ,
  textDecoration: 'none' ,
  outline: 'none',
  color: '#800000',
  backgroundColor: '#D2B48C',
  border: 'none',
  borderRadius: '15px',
  boxShadow: '0 9px #999',
  transform: 'translateY(4px)'}} onClick={() => this.onClick(this.state.rs)}> Parse PDF</button>
  



            <br/>
            <br/>
            
            <br/>
            </div>
            </div>
    );
  }
}
AccueilPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default AccueilPage ;