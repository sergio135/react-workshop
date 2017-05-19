import React, { Component } from 'react';
import Template from './template';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeEvent = this.changeEvent.bind(this);
    this.state = {
      text: 'Un ejemplo',
      clase: 'change'
    };
  }

  changeEvent(event) {
    this.setState({
      text: event.target.value,
      clase: 'rojo'
    });
    setTimeout( function() {
      this.setState({clase: 'change'});
    }.bind(this), 1);
  }

  render() {
    return <Template changeEvent={this.changeEvent} clase={this.state.clase} text={this.state.text}/>;
    /*
    return (
      <div className="App">
        <input type="text" onChange={this.changeEvent}/>
        <p className={this.state.clase}>
          {this.state.text}
        </p>
      </div>
    );
    */
  }
}

export default App;
