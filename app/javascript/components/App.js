import React from 'react';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from  './auth/SignOut';
import Map from './map/Map';

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <div>
          <a className="" rel="nofollow" data-method="delete" href="users/sign_out">
            Log out
          </a>
        </div> */}
        <Map />
        <SignUp />
        <SignIn />
        <SignOut />
      </div>
    )
  }
}

export default App