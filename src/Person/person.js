import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>Hi there i am new component</p>
            <p onClick={props.click}>{props.name}</p>       
            <p>{props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;