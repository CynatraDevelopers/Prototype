import './Login.css'
import image from '../../assets/Path1.svg'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import Form from '../Form/Form';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {

  let history = useHistory();
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

  const signUp = (e) => {
    e.preventDefault();
    history.push("/signup")
  }
  return (
    <div className="login">
      <div className="loginForm">
        <img src={logo} alt="Logo" className='logo'/>
        <h2 className="headerTitle">
          Create Account
        </h2>

        <form>
          <Form lists = {lists}/>
        </form>
        
        <div className="row button">
          <button>
            Login
          </button>
          <button onClick={signUp}>
            Sign Up
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