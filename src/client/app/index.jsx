// Libraries
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// Pages
import Homepage from './pages/homepage.jsx';
import Steps from './pages/steps.jsx';

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="/home" component={Homepage}/>
      <Route path="/steps" component={Steps}/>
    </Route>
  </Router>
), document.getElementById('app'));
