import React, { Component } from "react";

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }
  
  componentDidUpdate(){
    console.log('Atualizou')
  }

  render() {
    return(
      <h1>HORA: {this.state.hora}</h1>
    )
  }
}

export default Cronometro;