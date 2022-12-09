import React, { useState } from 'react';
import classNames from "classnames";
import axios from 'axios';


import "./register.css"


const Register = ({ onFormSwitch, className }) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfPass] = useState();
    const [focused, setFocused] = useState(false)

    const classes = classNames(
        "section center-content",
        className
    );

    const url = 'https://localhost:44378/api/Account/Register'

    const handleFocus = (e) => {
        setFocused(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            Username: username,
            Email: email,
            Password: pass,
            ConfirmPassword: confirmpass
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
        <section className={classes}>
            <div className="container-xs">
                <form className='register-form' onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input value={username} type='text' placeholder='Enter a username' id='username' name='username' onChange={(e) => { setUserName(e.target.value) }} required pattern='^[A-Za-z0-9]{3,12}$' onBlur={handleFocus} focused={focused.toString} />
                    <span>Username should be 3-12 characters without any special character</span>
                    <label htmlFor='email'>Email</label>
                    <input value={email} type='email' placeholder='Enter Your Email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} required />
                    <label htmlFor='password'>Password</label>
                    <input value={pass} type='password' placeholder='Enter Your Password' id='password' name='password' onChange={(e) => { setPass(e.target.value) }} required pattern='^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$' />
                    {/* <span>Password should be 8-16 characters with atleast one number, one special charatcer, one lowercase alphabet and one uppercase alphabet</span> */}
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <input value={confirmpass} type='password' placeholder='Confirm Your Password' id='password' name='password' onChange={(e) => { setConfPass(e.target.value) }} required pattern={pass.toString} />
                    {/* <span>Passwords do not match!</span> */}
                    <button className='reg-btn'>
                        Register
                    </button>
                </form>
                <button className='link-btn' onClick={() => onFormSwitch('login')}>Already have an account? Sign In</button>
            </div>
        </section>

    )
}

export default Register;