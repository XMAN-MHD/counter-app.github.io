import React from 'react';
import './App.css';
import {CounterNumber} from '../features/counterNumber/CounterNumber'
import {CounterBtn} from '../features/counterBtn/CounterBtn.js'
import { ResetBtn } from '../features/resetBtn/ResetBtn';
import { AddValue } from '../features/addValue/AddValue';


function App() {
  return (
    <div> 
      <div id='container'>
        {/* CounterNumber */}
        <CounterNumber/>
        {/* buttons */}
        <div id='controls'>
          {/* CounterBtn */} 
          <CounterBtn />
          {/* ResetBtn */}
          <ResetBtn />
        </div>
      </div>
      {/* AddValue */}
      <AddValue />
    </div>
  );
}

export default App;
