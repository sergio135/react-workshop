import React from 'react';
import ReactDOM from 'react-dom';
//import fs from 'fs';

import './css/reveal.css';
import './css/beige.css';
import './css/atom-one-dark.css';
import './css/estilos.css';

import EjemploInputBinding from './apps/EjemploInputBinding';

ReactDOM.render(
  <EjemploInputBinding/>,
  document.getElementById('ejemplo-input-binding')
);

ReactDOM.render(
  <div/>,
  document.getElementById('root')
);