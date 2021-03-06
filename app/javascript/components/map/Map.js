import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';;
import 'mapbox-gl/dist/mapbox-gl.css';
import MapPin from './MapPin';
import Requests from './Requests';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TOKEN = 'pk.eyJ1IjoiZGF2aWQyMDRjb2RlMSIsImEiOiJjazc2YjdobGUwOTI0M2VvamwwZXpvZGR1In0.FSpShMuhbroEHA9-0iG4sg';

class Map extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      helps: [],

      viewport: {
        latitude: 51.508,
        longitude: -0.140,
        zoom: 14,
        bearing: 0,
        pitch: 0
      },

      popupInfo: null,

      event: {}
    };
  }

  onClickMap(e) {
    console.log(e.lngLat);
  }

  onDblClick(e) {
    console.log("Hi", e.lngLat[0], e.lngLat[1]);
  }

  componentDidMount() {
    axios.get('/helps.json')
    .then(data => {
      let info = []
      data.data.data.map( (data) => {
        info.push(
          {
            id: data.id,
            title: data.title,
            description: data.description,
            request_type: data.request_type,
            location_long: data.location_long,
            location_lat: data.location_lat
          }
        )

        this.setState({helps: info})
      })
    })
    .catch(data => {

    })
  }

  _onClickMarker = helps => {
    this.setState({popupInfo: helps});
    console.log(helps.location_lat);
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={parseFloat(popupInfo.location_long)}
          latitude={parseFloat(popupInfo.location_lat)}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <Requests info={popupInfo} />
        </Popup>
      )
    );
  }


  render() {
    const {showPopup} = this.state;

    return (
      <div>
        <div className ="jumbotron jumbotron-fluid text-center">
          <h1>Map, get involved now!</h1>
          <h1>Status: {this.props.loggedInStatus}</h1>
          <div className ="offset-2">
            <h4 className ="text-left">Hello {this.props.user} </h4>
          </div>
        </div>

        <div className ="container">
          <Link 
            to ="/dashboard"
            className =""
            role = "button"
          >
            <button className ="">
              Visit your dashboard
            </button>
          </Link>
          <div className ="">
            <p className ="text-center">
              Browse the map below and take a good look around! Respond if it is something that
              interest you.
            </p>
            <p className ="text-center">
              The markers are request or post made by someone in your community
            </p>
          </div>

          <div className ="offset-md-1">
            <ReactMapGL
              {...this.state.viewport}
                width="70vw"
                height="60vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={TOKEN}
                onClick ={this.onClickMap}
                onDblClick ={this.onDblClick}
                doubleClickZoom ={false}
              > 
              
              {this.state.helps.map(help => (
                <MapPin 
                  {...this.state.helps}
                  key={help.id}
                  data={this.state.helps} 
                  onClick={this._onClickMarker} 
                />
              ))
              }
              {this._renderPopup()}                      
            </ReactMapGL>
          </div>
          
          <div className ="pb-5 text-center">
            <p className ="text-center pt-3">
              Make your own request to help others or ask for help
            </p>
            <div className ="row">
              <div className ="col-md-4 offset-md-2">
                <Link 
                  to ='/help'
                  className =''
                  role ='button'
                >
                  <button>
                    Click here to volunteer
                  </button>
                </Link>
              </div>
              <div className ="col-md-4">
                <Link 
                  to ='/'
                  className =''
                  role ='button'
                >
                  <button>
                    Click here to ask for help
                  </button>
                </Link>
              </div>
            </div>
          </div>          
        </div>
      </div>
    );
  };
};

export default Map;