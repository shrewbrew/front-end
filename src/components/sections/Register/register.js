import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import classNames from "classnames";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import "./register.css"


const Register = ({ onFormSwitch, className }) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const classes = classNames(
        "section center-content",
        className
    );

    const history = useHistory()
    const url = 'https://localhost:44378/api/Account/Register'
    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "Enter First Name",
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            label: "First Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Enter Last Name",
            errorMessage:
                "Last name should be 3-16 characters and shouldn't include any special character!",
            label: "Last Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Enter Password",
            errorMessage:
                "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(userData)

        try {
            const res = await axios.post(url, values);
            localStorage.setItem('token', res.data[0].userId.toString())
            localStorage.setItem('email', res.data[0].userEmail.toString())
            history.push('/')

        } catch (error) {
            alert(error);
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <section className={classes}>
            <div className="container-xs">
                <form className='register-form' onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button className='reg-btn'>
                        Register
                    </button>
                </form>
                <button className='link-btn' onClick={() => onFormSwitch('login')}>Already have an account? Sign In</button>
            </div>
        </section>

    );

}

export default Register;