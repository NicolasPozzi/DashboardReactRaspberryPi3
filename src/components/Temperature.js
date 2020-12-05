import React from 'react';
//import TemperatureStore from '../stores/TemperatureStore';
//import { observer } from 'mobx-react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.1.60:8000');



export default class Temperature extends React.Component {
  
  constructor(props){
    super(props);
    //this.setState({temp:0});
    this.state = {
      temp:0,
      humi:0
    };
    this.getRealTime();
  }

  getRealTime(){
    //socket.on('timer', timestamp => this.setState({temp:timestamp}));
    socket.on("temperatureHumidity", (temperature, humidity) => {
      console.log(temperature);
      this.setState({
        temp: temperature,
        humi: humidity
      });
    });
    socket.emit('subscribeTemperatureHumidity', 1000);
  }

  render() {
    return (
      <div>
        <h2>Temperature in real-time</h2>
        <p>{this.state.temp} C°</p>
        <p>{this.state.humi} %</p>
      </div>
    );
  }
}
