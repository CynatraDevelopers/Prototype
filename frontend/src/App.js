import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginForm from './components/Login/Login';
import SignupForm from './components/Signup/Signup';
import Profile from './components/Profile/Main_Profile';
import NavigationBar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupForm} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/explore' exact component={NavigationBar} />
      </Switch>
    </Router>
  );
}

export default App;
