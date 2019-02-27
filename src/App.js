import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.valueSwitchMethod(event, person.id)} /></ErrorBoundary>
          })}
        </div>
      )
      btnClass = classes.Red;
    }

    const classe = [];
    if(this.state.persons.length <= 2) {
      classe.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      classe.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app.</h1>
        <p className={classe.join(' ')}>this is working</p>
        
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Change something
        </button>
        
        {persons}
      </div>
    );
  }
}     

export default App;

/*
source maps are generated i.e. translation files allowing the browser developer tools to go into your code as
we wrote it and allow you to debug that code even thoughthe code which is shipped to the browser
will be a different one optimized and 
*/