import React, { useState, useEffect, useContext } from 'react';
import Login from './login';
import Register from './register';
import QuizContext from '../../../context/QuizContext';
import { useHistory } from "react-router-dom";

import './index.css';
const UserAccount = () => {
    const { state: { isAuth } } = useContext(QuizContext);

    let history = useHistory();

    useEffect(() => {
        if(isAuth) {
            history.push('/')
        }
    }, [isAuth]);

    const [active, setActive] = useState(0);

    const activeStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: '#212121',
        fontWeight: 'bold'
      };
    const components = [
        {
            id: 1,
            name: 'login',
            title: 'Login in to your account',
            value: 'login component',
            component: <Login />
      
          },
          {
            id: 2,
            name: 'register',
            title: 'Create new account',
            value: 'register component',
            component: <Register />
          }
    ];

    return (
        <section className={'form-content'}>
            <div className={'login-register-content'}>
                <div className={'form-tab-button'}>
                    {
                        components.map(({id, name}, index) => (
                            <button
                                key={id}
                                onClick={() => setActive(index)}
                                style={index === active ? activeStyle : null}
                            >
                            {name}
                            </button>
                        ))
                    }
                </div>
                <h2>{components[active].title}</h2>

                <div className={'component-container'}>
                    {components[active].component}
                </div>
            </div>
        </section>
    )
};
export default UserAccount;