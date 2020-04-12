import React from 'react';
import axios from 'axios';

class Help extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "", 
      description: "",
      request_type: "",
      location_long: "",
      location_lat: "",
      status: "",
      volunteeringErrors: "",

      event: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    
    axios
    .post("http://localhost:3000/helps",
      {
        help: {
          title: this.state.title,
          description: this.state.description,
          request_type: this.state.request_type,
          location_long: this.state.location_long,
          location_lat: this.state.location_lat,
          status: this.state.status
        }
      },

      { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
        console.log("help request submitted")
      }
    }).catch(error => {
      console.log("registration", error);
    });
    event.preventDefault();
    alert("Congrgulation on volunteering")
    // this.props.history.push("/map"); 
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  } 

  render() {
    return (
      <div>
        <div className ="row py-4">
          <div className ="col-md-8 offset-md-2 text-center">
            <form onSubmit={this.handleSubmit}>
              <div className ="row text-center pb-4">
                <div className ="col-md-4 offset-md-2">
                  <label>Marker's Longitude</label>
                    <input
                      type ="text"
                      name ="location_long"
                      className ="form-control"
                      placeholder ="location_long"
                      required
                      value ={this.state.location_long}
                      onChange ={this.handleChange}
                    />
                </div>

                <div className ="col-md-4">
                  <label>Marker's Latitude</label>
                  <input
                    type ="text"
                    name ="location_lat"
                    className ="form-control"
                    placeholder ="location_lat"
                    required
                    value ={this.state.location_lat}
                    onChange ={this.handleChange}
                  />
                </div>
              </div>

              <div className ="form-group col-md-4 offset-md-4">
                <h1 className =""> 
                  Volunteer 
                </h1>
                <label htmlFor ="volTitle">Title</label>
                <input
                  type ="text"
                  name ="title"
                  id ="volTitle"
                  className ="form-control"
                  placeholder ="title of request"
                  required
                  value ={this.state.title}
                  onChange ={this.handleChange}
                />
              </div>          

              <div className ="form-group">
                <label htmlFor ="volDescription">Description</label>
                  <textarea
                    type ="text"
                    name ="description"
                    id ="volDescription"
                    className ="form-control"
                    placeholder ="Describe what you will be providing, the more the detail the better"
                    rows ="5"
                    required
                    value ={this.state.description}
                    onChange ={this.handleChange}
                  />
              </div>

              <div className ="col-md-4 offset-md-4 pb-2">
                <label htmlFor ="volType">Type of Request:
                </label>
                <select 
                  name="request_type"
                  className="form-control"
                  required
                  value={this.state.value}
                  onChange ={this.handleChange}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled></option>
                  <option value ="one-time">One-Time task</option>
                  <option value ="material-need">Material-Need</option>
                </select>
              </div>
              <button type ="submit">Volunteer</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default Help;