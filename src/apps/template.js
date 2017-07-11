import React from 'react';
const Template = ({changeEvent, clase, text}) => (

    <div className="App">
        <input type="text" onChange={changeEvent}/>
        <p className={clase}>
          {text}
        </p>
    </div>

);
export default Template;