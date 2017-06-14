import React from 'react';
import GoogleMap from 'google-map-react';
import CUCEI from './CUCEI';
import CUAAD from './CUAAD';
import CUCEA from './CUCEA';

export default class SimpleMapPage extends React.Component {

  render() {
    return (
 
      <GoogleMap 
          apiKey={'AIzaSyAiJ4J5lRx5LvNgHTIbassx3TdlstvyAYY'} 
          center={this.props.center}
          zoom={this.props.zoom}>
          <CUCEI lat={this.props.center[0]} lng={this.props.center[1]} text={"CUCEI"} />
          <CUAAD lat={20.7090353} lng={-103.3459297} text={'CUAAD'} />
          <CUCEA lat={20.7407657} lng={-103.3830412} text={'CUCEA'} />
      </GoogleMap>
    );
  }
}