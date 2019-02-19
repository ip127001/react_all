import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      {name: 'rohit', age: 22},
      {name: 'mk', age: 0},
      {name: 'mohit', age: 19}
    ],
    otherStateProperty: "i am other property"
  }

  switchStateMethod = () => {
    this.setState({
      persons: [
        {name: 'rohit', age: 22},
        {name: 'unknown', age: 22},
        {name: 'mohit', age: 19}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>this is working</p>
        <button onClick={this.switchStateMethod}>Change something</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /><br></br>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Go for shopping</Person><br></br>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
  }
} 

export default App;
