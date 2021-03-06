import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id: 'abc11', name: 'rohit', age: 22},
      {id: 'abc12', name: 'mk', age: 0},
      {id: 'abc13', name: 'mohit', age: 19}
    ],
    otherStateProperty: "i am other property",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
  }


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;  
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    }); 
  };

  isLogin = () => {
    this.setState({isAuthenticated: true});
  }

render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            isAuth={this.state.isAuthenticated}
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.valueSwitchMethod}></Persons>
      )
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>remove cockpit</button>
        
        <AuthContext.Provider value={{authenticated: this.state.isAuthenticated, login: this.isLogin}}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.AppTitle}
              personsLength={this.state.persons.length} 
              showPersons={this.state.showPersons} 
              clicked={this.togglePersonsHandler}>
            </Cockpit>
          ): null}
        {persons}
        </AuthContext.Provider> 
      </Aux>
    )
}    
}

export default withClass(App, classes.App);

/*
source maps are generated i.e. translation files allowing the browser developer tools to go into your code as
we wrote it and allow you to debug that code even thoughthe code which is shipped to the browser
will be a different one optimized and 
*/