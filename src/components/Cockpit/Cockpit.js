import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const togglebtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // const timer = setTimeout(() => {
        //     alert('saved to the cloud');
        // }, 1000);
        togglebtnRef.current.click();

        return () => {
            // clearTimeout(timer);
            console.log('1st useEffect clean up')
        }
    }, []);

    useEffect(() => {
        console.log('2nd useEffect')
        return () => {
            console.log('2nd useEffect clean up work');
        }
    });

    const classe = [];
    let btnClass = '';

    if(props.personsLength <= 2) {
        classe.push(classes.red);
    }

    if(props.personsLength <= 1) {
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
                ref={togglebtnRef}
                className={btnClass}
                onClick={props.clicked}>
            Change something
            </button>
            
            <AuthContext.Consumer>
                {(context) =>  
                <button onClick={context.login}>Login</button>
                }
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);