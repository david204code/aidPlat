import React from 'react';
import axios from 'axios';

class SignOut extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLogOutClick() {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios
    .delete("http://localhost:3000/users/sign_out/", 
    
    { withCredentials: true}
    )
    .then(response => {
      console.log("logged out!")
      console.log(response)
    })
    .catch(error => {
      console.log("logout error", error);
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleLogOutClick()}>Logout</button>
      </div>
    );
  }
}

export default SignOut;