import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support'
import Understanding from '../Understanding/Understanding'
import Comments from '../Comments/Comments'
import Success from '../Success/Success'
import Admin from '../Admin/Admin'
import NotFound from '../NotFound/NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
        <div>
          <Switch>
            <Redirect exact from="/" to="/feeling" />
            <Route exact path="/feeling" component={Feeling} />
            <Route exact path='/understanding' component={Understanding} />
            <Route exact path='/support' component={Support} />
            <Route exact path='/comments' component={Comments} />
            <Route exact path='/success' component={Success} />
            <Route exact path='/admin' component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
