import React, { useState } from 'react';
import Button from "../../elements/Button";

import "./login.css"


const Login = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const url = 

    const handleSubmit = (e) => {
        const userData = {
            email: email,
            password: pass
            // Password: pass
        }
        // console.log(userData)

        axios.post(url, userData).then((result) => {
            alert(result.data)
        }).catch((error) => {
            alert(error)
        })
    }
    return (
        <div className="auth-form-container">
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input value={email} type='email' placeholder='Enter Your Email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                <label htmlFor='password'>Password</label>
                <input value={pass} type='password' placeholder='Enter Your Password' id='password' name='password' onChange={(e) => { setPass(e.target.value) }} />
                <button>
                    Sign in
                </button>
            </form>
            <button className='link-btn' onClick={() => onFormSwitch('register')}>Don't have an account? Register</button>
        </div>

    )
}

export default Login