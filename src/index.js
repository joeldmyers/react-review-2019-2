import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import ButtonToggle from './components/ButtonToggle/ButtonToggle';
import InputField from './components/InputField/InputField';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <p>First Dom Content</p>
      <ButtonToggle />
      <InputField />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app-root'));
