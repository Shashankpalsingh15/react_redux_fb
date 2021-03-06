import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import './App.css';

const App = () => {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
      <Route exact path="/">
       <Login />
      </Route>
      <Route exact path="/signup">
       <Signup />
      </Route>
      <Route exact path="/dashboard">
      <Dashboard />
     </Route>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
