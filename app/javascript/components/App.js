import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import SignUp from './auth/SignUp';
// import SignIn from './auth/SignIn';
import SignOut from  './auth/SignOut';
import Map from './map/Map';
import Help from './help/help';
import Request from './map/Request';
import ConversationsList from './messaging/ConversationsList';
import Dashboard from './pages/Dashboard';
import Notice from './pages/Notice';
import axios from 'axios';

// const fakeAuth = {
//   isAuthenticated: true,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) //fake asyn
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: false,
    }

  }
 
  render () {
    const isAuthenticated = this.state.loggedInStatus
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        // fakeAuth.isAuthenticated === true
        isAuthenticated === true
          ? <Component {...props}/>
          : <Redirect to={{
              pathname: '/notice',
              state: { from: props.location }
          }} />
      )}/>
    )
    return (
      <div>
        <BrowserRouter>

          <Navbar />
        
          <Switch >
            
            <Route 
              exact path ={"/"}
              component = { Home }
            />
            <Route
              exact path ={"/signup"}
              component = { SignUp }
            />
            <PrivateRoute
              exact path ={"/dashboard"}
              component = { Dashboard }
            />
            <Route
              exact path ={"/map"}
              component = { Map }
            /> 

            <PrivateRoute
              exact path ={"/help"}
              component = { Help }
            />

            <PrivateRoute
              path="/help/:id" exact component ={Request}
            />

            <Route
              exact path = {"/conversationslist"}
              component = { ConversationsList }
            />

            <Route
              exact path = {"/notice"}
              component = { Notice }
            />

          </Switch>
        </BrowserRouter>
        {/* <div>
          <a className="" rel="nofollow" data-method="delete" href="users/sign_out">
            Log out
          </a>
        </div> */}
        <SignOut />
      </div>
    )
  }
}

export default App