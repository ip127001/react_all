import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'abc11', name: 'rohit', age: 22},
      {id: 'abc12', name: 'mk', age: 0},
      {id: 'abc13', name: 'mohit', age: 19}
    ],
    otherStateProperty: "i am other property",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  valueSwitchMethod = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.valueSwitchMethod(event, person.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (  
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a react app.</h1>
          <p className={classes.join(' ')}>this is working</p>

          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>
            Change something</button>
    
          {persons}
        </div>
      </StyleRoot>
    );
  }
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
} 

export default Radium(App);



// const [personState, setPersonsState] = useState({
//   persons: [
//       {name: 'rohit', age: 22},
//       {name: 'mk', age: 0},
//       {name: 'mohit', age: 19}
//     ],
//   otherProperty: 'hi there'
// });

// const [otherState, setOtherState] = useState('hi there');
