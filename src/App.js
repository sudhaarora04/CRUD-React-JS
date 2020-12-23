import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import AddUser from './components/users/AddUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route exact path='/users/:id' component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
