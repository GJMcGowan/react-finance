// Libraries
import React from 'react';
import {render} from 'react-dom';

// Components
import Homepage from './pages/homepage.jsx';

class App extends React.Component {
  render () {
    return (
      <Homepage/>
    );
  }
}

render(<App/>, document.getElementById('app'));
