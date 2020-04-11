import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';;
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoiZGF2aWQyMDRjb2RlMSIsImEiOiJjazc2YjdobGUwOTI0M2VvamwwZXpvZGR1In0.FSpShMuhbroEHA9-0iG4sg';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 51.508,
        longitude: -0.140,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }


  render() {
    return (
      <div>
        <h1>Map Component</h1>
        <ReactMapGL
          {...this.state.viewport}
            width="70vw"
            height="60vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={TOKEN}
          >

          <Marker 
            longitude={-0.140} 
            latitude={51.508} 
            offsetLeft={-20} 
            offsetTop={-10}
          >
          <button>You are here</button>
          </Marker>
        </ReactMapGL>
      </div>
    );
  };
};

export default Map;