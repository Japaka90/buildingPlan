import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import SelectedStackPlan from './components/selectedStackPlan';
import * as serviceWorker from './serviceWorker';
import store from './store/store';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' exact component={App}/>
      <Route path='/spaces/:id' component={SelectedStackPlan}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
