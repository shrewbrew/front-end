import React, { useState } from "react";
import Login from '../components/sections/Login/login'
import Register from "../components/sections/Register/register";

const Auth = () => {
    const [currentForm, setCurrentForm] = useState("login")

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    return (
        <>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </>
    )

}

export default Auth