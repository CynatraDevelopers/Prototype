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
      <div className="loginForm">
        {/* <img src={image} alt="Logo" className=''/> */}
        <h2 className="headerTitle">
          Create Account
        </h2>

        <form>
          <Form lists = {lists}/>
        </form>
        
        <div className="row button">
          <button>
            Sign In
          </button>
        </div>
      </div>
      <img src={image} alt="Logo" className='design-img'/>
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