import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { connect } from 'react-redux';


class MapComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const mapStyles = {
            width: '95%',
            height: '95%',
          };
        const bounds = new this.props.google.maps.LatLngBounds();
        const locations = [];
        this.props.markerPlaces.map(markerPlace=> {
        locations.push(markerPlace.location);
        bounds.extend(markerPlace.location);
        });
        
        locations.map((as, i)=>{
            console.log(i)
        });
          

        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style = {mapStyles}
                    bounds={bounds}
                >
                    {locations.map((location, index)=> (
                        <Marker key={index} 
                        label={`${index+1}`}
                        position={location}
                    />))}
                </Map>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        markerPlaces: state.markers 
    }
}

const ConnectedMapComponent = connect(mapStateToProps)(MapComponent)

//TODO : Delete key
export default GoogleApiWrapper({
    apiKey: 'API_KEY'
  })(ConnectedMapComponent);
