import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'rohit', age: 22},
      {name: 'mk', age: 0},
      {name: 'mohit', age: 19}
    ],
    otherStateProperty: "i am other property",
    showPersons: false
  }

  switchStateMethod = (name) => {
    this.setState({
      persons: [
        {name: name, age: 22},
        {name: 'unknown', age: 22},
        {name: 'mohit', age: 19}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  valueSwitchMethod = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 22},
        {name: 'mk', age: 0},
        {name: 'mohit', age: 19}
      ],
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age}
              />
          })}
        </div>
      )
    }

    return (  
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <p>this is working</p>

        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>
        Change something</button>
  
        {persons}
  
      </div>
    );
  }
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
} 

export default App;



// const [personState, setPersonsState] = useState({
//   persons: [
//       {name: 'rohit', age: 22},
//       {name: 'mk', age: 0},
//       {name: 'mohit', age: 19}
//     ],
//   otherProperty: 'hi there'
// });

// const [otherState, setOtherState] = useState('hi there');
