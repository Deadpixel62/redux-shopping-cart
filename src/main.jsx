import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import Reducer from './reducers/reducer'

const store = createStore(Reducer,
  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);