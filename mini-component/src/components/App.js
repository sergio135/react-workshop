import React, { Component } from 'react';
//import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.changeFont = this.changeFont.bind(this);
		this.changeContrast = this.changeContrast.bind(this);
		this.state = {
			input1: false,
			input2: false
		};
	}

	changeFont() {
		console.log(this.state);
		if (!this.state.input1) {
			window.document.body.style.fontSize = "18px";
			this.setState({
				input1: true
			});
		} else {
			window.document.body.style.fontSize = "14px";
			this.setState({
				input1: false
			});
		}
	}

  	changeContrast() {
		console.log(this.state);
		if (!this.state.input2) {
			window.document.body.style.backgroundColor = "#2e2e2e";
			window.document.body.style.color = "#ffffff";
			this.setState({
				input2: true
			});
		} else {
			window.document.body.style.backgroundColor = "#ffffff";
			window.document.body.style.color = "#000000";
			this.setState({
				input2: false
			});
		}
  	}

  	render() {
		return (
		  	<div className="Mini-conf-panel" style={divStyle}>
			  	<h2>Cuadro de configuración</h2>
			  	<input type="checkbox" id="box1" value={this.state.input1} onClick={this.changeFont}/><label htmlfor="box1">Fuente grande</label><br/>
			  	<input type="checkbox" id="box2" value={this.state.input2} onClick={this.changeContrast}/><label htmlfor="box2">Modo Contraste</label>
		  	</div>
		);
  	}
}

const divStyle = {
    display: 'block',
	position: 'fixed',
	zIndex: 9999,
  	right: '0',
  	top: '20%',
  	width: '200px',
  	height: '300px',
  	borderRadius: '10px',
  	backgroundColor:' #dddddd',
  	boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.3)',
  	padding: '10px',
  	boxSizing: 'border-box'
};

export default App;