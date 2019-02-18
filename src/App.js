import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>this is working</p>
        <Person name="Rohit" age="22" />
        <Person name="mk" age="00">Go for shopping<p>hi there</p></Person>
        <Person name="Mohit" age="19" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
  }
} 

export default App;
