import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p>Hi there i am new component</p>
                <p onClick={this.props.click}>I am {this.props.name} of age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}></input>
            </div>  
    )
    }
}

export default Person;

//webpack import css into html