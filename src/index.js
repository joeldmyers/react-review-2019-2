import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import ButtonToggle from './components/ButtonToggle/ButtonToggle';

const App = () => (
  <div>
    <Header />
    <p>First Dom Content</p>
    <ButtonToggle />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app-root'));
