import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('saved to the cloud');
        }, 1000);
    }, [props.persons])

    const classe = [];
    let btnClass = '';

    if(props.persons.length <= 2) {
        classe.push(classes.red);
    }

    if(props.persons.length <= 1) {
        classe.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classe.join(' ')}>this is working</p>
        <button 
            className={btnClass}
            onClick={props.clicked}>
        Change something
        </button>
        </div>
    );
}

export default cockpit;