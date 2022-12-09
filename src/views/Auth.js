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
                currentForm === "login" ? <Login onFormSwitch={toggleForm} className="illustration-section-01" /> : <Register onFormSwitch={toggleForm} className="illustration-section-01" />
            }
        </>
    )

}

export default Auth