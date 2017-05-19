import React from 'react';
import ReactDOM from 'react-dom';
//import fs from 'fs';

import './css/reveal.css';
import './css/beige.css';
import './css/atom-one-dark.css';
import './css/estilos.css';

import EjemploInputBinding from './apps/EjemploInputBinding';
//import App from './apps/App';

/* jshint ignore:start */
ReactDOM.render(
  <EjemploInputBinding/>,
  document.getElementById('ejemplo-input-binding')
);
/* jshint ignore:end */

/* jshint ignore:start */
ReactDOM.render(
  <div/>,
  document.getElementById('root')
);
/* jshint ignore:end */
