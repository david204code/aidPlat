import React from 'react';
import "./SignIn.css";
import axios from 'axios';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } =this.state;
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    
    axios
    .post("http://localhost:3000/sessions", 
    {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    },
    
    { withCredentials: true }
    )
    .then(response => {
      console.log(response);
      if (response.data.logged_in === true ) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error => {
      // console.log("Login error", error);
      // console.log(error.request);
      // console.log('Error', error.message);
      console.log(error.config);
      console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className ="">
          <div className ="text-center">
            <h1>Welcome back!</h1>
            <h4>Great to see you, log in here</h4>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className ="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                required
                />
            </div>
            <div className ="form-group">
              <label>Password</label>
              <input 
                type="password"
                name="password"
                placeholder="Your password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className ="text-center mt-2">
              <button type="submit" className ="btn btn-success mt-1">
                Login
                </button>
            </div>
          </form>
        </div>
    )
  }
}

export default SignIn