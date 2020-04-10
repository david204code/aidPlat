import React from 'react'
import SignUp from './forms/signUp'
import SignIn from './forms/signIn'

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <p class="display-1">This is the App.js</p> */}
        <SignUp />
        <SignIn />
      </div>
    )
  }
}

export default App