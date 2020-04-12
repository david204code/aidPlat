import React from 'react';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import SignOut from  './auth/SignOut';
import Map from './map/Map';
import Help from './help/help';

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <div>
          <a className="" rel="nofollow" data-method="delete" href="users/sign_out">
            Log out
          </a>
        </div> */}
        {/* <Map /> */}
        {/* <SignOut /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <Help />
      </div>
    )
  }
}

export default App