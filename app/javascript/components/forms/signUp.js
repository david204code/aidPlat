import React from 'react';
import "./signUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      // firstName: '',
      // lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: ''       
    }

    this.handleSubmit =this.handleSubmit.bind(this);
    this.handleChange =this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit} className ="">
        <label>
          Name:
          <input 
            type ="email" 
            name ="email" 
            placeholder ="Your email" 
            value ={this.state.email} 
            onChange ={this.handleChange} 
            required 
          />
        </label>
          <input
            type ="password"
            name ="password"
            placeholder ="Your Password"
            value ={this.state.password}
            onChange ={this.handleChange}
            required  
          />

          <input 
            type ="password"
            name ="password_confirmation"
            placeholder ="Confirmed Password"
            value ={this.state.password_confirmation}
            onChange ={this.handleChange}
            required
          />

        <button type ="submit">Sign Up!</button>
      </form>
    )
  }
}

export default SignUp