import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import PropertyListingSummary from './components/property/PropertyListingSummary';
import PropertyListing from './components/property/PropertyListing';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />

            <Switch>
              <Route exact path='/' component={PropertyListingSummary} />
              <Route path='/property/id' component={PropertyListing} />
            </Switch>
        </div>
      </BrowserRouter>
    );

  }
}


export default App;
