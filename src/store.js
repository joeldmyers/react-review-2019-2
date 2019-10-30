import { createStore } from 'redux';
import reducer from './reducers/index';
// Saga Here

const store = createStore(reducer);

export default store;
