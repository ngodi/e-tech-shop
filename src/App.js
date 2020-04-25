import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
