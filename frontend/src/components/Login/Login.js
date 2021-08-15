import './Login.css'
import image from '../../assets/img.png'
import { useState } from 'react'
import Form from '../Form/Form';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let lists = [
    {
      description: "Email",
      type: "text",
      placeholder: "",
      value: email,
      setValue: setEmail,
    },
    {
      description: "Password",
      type: "password",
      placeholder: "",
      value: password,
      setValue: setPassword,
    },
  ]

  return (
    <div className="login">
      <div id="loginform">
        <h2 id="headerTitle">
          Create Account
        </h2>

        <form className="login__form">
          <Form lists = {lists}/>
        </form>
        
        <div id="button" className="row">
          <button>
            Sign In
          </button>
        </div>
      </div>
      <img src={image} alt="Logo" id='design-img'/>
    </div>
  );
}
 
export default LoginForm;


/*
label description
input type
placeholder
value
onChange
*/