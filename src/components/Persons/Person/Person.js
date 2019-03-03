import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
// import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} of age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}></input>
            </Aux>
        )
    }
}

export default Person;

//webpack import css into html