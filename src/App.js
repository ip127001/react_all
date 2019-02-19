import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const app = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
        {name: 'rohit', age: 22},
        {name: 'mk', age: 0},
        {name: 'mohit', age: 19}
      ],
    otherProperty: 'hi there'
  });

  const [otherState, setOtherState] = useState('hi there');

  console.log(personState, otherState);

  const switchStateMethod = () => {
    setPersonsState({
      persons: [
        {name: 'rohit', age: 22},
        {name: 'unknown', age: 22},
        {name: 'mohit', age: 19}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <p>this is working</p>
      <button onClick={switchStateMethod}>Change something</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} /><br></br>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>Go for shopping</Person><br></br>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'));
} 

export default app;

// state = {
//   persons: [
//     {name: 'rohit', age: 22},
//     {name: 'mk', age: 0},
//     {name: 'mohit', age: 19}
//   ],
//   otherStateProperty: "i am other property"
// }

