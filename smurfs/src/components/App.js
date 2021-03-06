import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import SmurfList from './smurfList.js';
import Form from './form.js';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Form} />
        <Route path="/" component={SmurfList} />
      </div>
    );
  }
}

export default App;
