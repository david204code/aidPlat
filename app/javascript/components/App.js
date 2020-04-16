import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './auth/SignUp';
// import SignIn from './auth/SignIn';
import SignOut from  './auth/SignOut';
import Map from './map/Map';
import Help from './help/help';
import Request from './map/Request';
import ConversationsList from './messaging/ConversationsList';

class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch >
            
            <Route 
              exact path ={"/"}
              component = { Home }
            />
            <Route
              exact path ={"/signup"}
              component = { SignUp }
            />
            <Route
              exact path ={"/map"}
              component = { Map }
            /> 

            <Route
              path="/help/:id" exact component ={Request}
            />

            <Route
              exact path ={"/help"}
              component = { Help }
            />

            <Route
              exact path = {"/conversationslist"}
              component = { ConversationsList }
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