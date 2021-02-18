import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import PropertyListingSummary from './components/property/PropertyListingSummary';
import PropertyListing from './components/property/PropertyListing';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />

            <Switch>
              <Route exact path='/' component={PropertyListingSummary} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/property/:id' component={PropertyListing} />
            </Switch>
        </div>
      </BrowserRouter>
    );

  }
}


export default App;
