import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginForm from './components/Login/Login';
import SignupForm from './components/Signup/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupForm} />
      </Switch>
    </Router>
  );
}

export default App;
