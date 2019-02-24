import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p>Hi there i am new component</p>
            <p onClick={props.click}>I am {props.name} of age {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}></input>
        </div>  
    )
}

export default Radium(person);

//webpack import css into html