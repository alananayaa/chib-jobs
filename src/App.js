import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Profile from './components/profile.component'

const App = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return ( 
  <Router>
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to={'/sign-in'}>Chib Jobs</Link>
          <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id='navbarToggler'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/sign-in'}>Login</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/sign-up'}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/sign-in' component={Login} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </div>
    </div>  
  </Router>
  )
}

export default App;
