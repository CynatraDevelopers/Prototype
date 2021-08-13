import './Login.css'
import React from 'react';
import image from './img.png'

class LoginForm extends React.Component{
  render(){
    return(
      <div>        
        <div id="loginform">
          <FormHeader title="Create Account" />
          <Form />
        </div>
        <img src={image} alt="Logo" id='design-img'/>
      </div>
      
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Email"  type="text" />
     <FormInput description="Password" type="password"/>
     <FormButton title="Sign in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

export default LoginForm;
