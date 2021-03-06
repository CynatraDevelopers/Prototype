import '../Login/Login.css'
import image from '../../assets/Path1.svg'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import Form from '../Form/Form';
import { Link} from 'react-router-dom';

const SignupForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let lists = [
    {
      description: "Username",
      type: "text",
      placeholder: "",
      value: username,
      setValue: setUsername,
    },
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
    {
      description: "Confirm Password",
      type: "password",
      placeholder: "",
      value: confirmPassword,
      setValue: setConfirmPassword,
    },

  ]

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
            Sign Up
          </button>
          <div className="signup__link">
            {"Already have an account "}
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
      <img src={image} alt="Logo" className='design-img'/>
    </div>
  );
}
 
export default SignupForm;


/*
label description
input type
placeholder
value
onChange
*/