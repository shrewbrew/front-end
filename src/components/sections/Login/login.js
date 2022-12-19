import React, { useState } from 'react';
import classNames from "classnames";
import axios from 'axios';
import "./login.css"
import { useHistory } from 'react-router-dom';


const Login = ({ onFormSwitch, className }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const classes = classNames(
        "section center-content",
        className
    );

    const url = "https://localhost:44378/api/Account/Login"
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email: email,
            password: pass
        }
        localStorage.setItem('token', 'qwert123')
        // localStorage.setItem('email', 'email.toString()')
        // axios.post(url, userData).then((result) => {
        //     // alert(result.data)
        //     localStorage.setItem('token', 'qwert123')
        //     localStorage.setItem('email', email)
        // }).catch((error) => {
        //     alert(error)
        // })
        history.push('/')

    }
    return (
        <section className={classes}>
            <div className="container-xs">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input value={email} type='email' placeholder='Enter Your Email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <label htmlFor='password'>Password</label>
                    <input value={pass} type='password' placeholder='Enter Your Password' id='password' name='password' onChange={(e) => { setPass(e.target.value) }} />
                    <button className='login-btn'>
                        Sign in
                    </button>
                </form>
                <button className='link-btn' onClick={() => onFormSwitch('register')}>Don't have an account? Register</button>
            </div>
        </section>
    )
}

export default Login