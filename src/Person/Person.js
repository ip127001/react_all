import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>Hi there i am new component</p>
            <p onClick={props.click}>{props.name}</p>       
            <p>{props.age}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}></input>
        </div>  
    )
}

export default person;

//webpack import css into html