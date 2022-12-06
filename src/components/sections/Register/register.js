import React, { useState } from 'react';
import axios from 'axios';


import "./register.css"


const Register = ({ onFormSwitch }) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfPass] = useState();

    const url = 'https://localhost:44330/api/Account'

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            name: pass
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
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input value={username} type='text' placeholder='Enter a username' id='username' name='username' onChange={(e) => { setUserName(e.target.value) }} />
                <label htmlFor='email'>Email</label>
                <input value={email} type='email' placeholder='Enter Your Email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                <label htmlFor='password'>Password</label>
                <input value={pass} type='password' placeholder='Enter Your Password' id='password' name='password' onChange={(e) => { setPass(e.target.value) }} />
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input value={confirmpass} type='password' placeholder='Confirm Your Password' id='password' name='password' onChange={(e) => { setConfPass(e.target.value) }} />
                <button>
                    Register
                </button>
            </form>
            <button className='link-btn' onClick={() => onFormSwitch('login')}>Already have an account? Sign In</button>
        </div>
    )
}

export default Register;