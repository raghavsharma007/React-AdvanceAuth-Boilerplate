import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Activate from './containers/Activate';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import SignUp from './containers/SignUp';
import Layout from './hocs/Layout';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/signup' component={SignUp}></Route>
              <Route exact path='/activate/:uid/:token' component={Activate}></Route>
              <Route exact path='/reset_password' component={ResetPassword}></Route>
              <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm}></Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>

  );
}

export default App;
