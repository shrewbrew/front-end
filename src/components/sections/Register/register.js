import React, { useState } from 'react';
import axois from 'axios';


import "./register.css"


const Register = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRePass] = useState();


    const url = 
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            Email: email,
            Password: pass
        }

        axios.post(url,userData).then((result)=>{
            alert(result.data);
        }).catch((error)=>{
            alert(error)
        })
    }
    return (
        <div className="auth-form-container">
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input value={email} type='email' placeholder='Enter Your Email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                <label htmlFor='password'>Password</label>
                <input value={pass} type='password' placeholder='Enter Your Password' id='password' name='password' onChange={(e) => { setPass(e.target.value) }} />
                <label htmlFor='repassword'>Re-enter Password</label>
                <input value={repass} type='password' placeholder='Re-enter Your Password' id='password' name='password' onChange={(e) => { setRePass(e.target.value) }} />
                <button>
                    Register
                </button>
            </form>
            <button className='link-btn' onClick={() => onFormSwitch('login')}>Already have an account? Sign In</button>
        </div>
    )
}

export default Register