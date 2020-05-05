import React,{ Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import Header from './components/Header/Header';

import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser} from './redux/user/user.action';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser} from './redux/user/user.selector';

class App extends Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser( userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() =>
           this.props.currentUser ? (
             <Redirect to = "/" />
           ) : (
             <SignInAndSignUpPage/>
           )
          }
           />
           <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
