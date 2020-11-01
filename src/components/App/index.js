import React from 'react';
import './index.css';
import Display from '../Display';
import ButtonPanel from '../ButtonPanel';

const App = () => (
  <div className="app flex flex-column">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
